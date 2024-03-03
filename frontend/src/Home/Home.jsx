/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'; // Import PacmanLoader from Material-UI lab
import { Typography, TextField, Button } from '@mui/material'; // Import Typography, TextField, Button from Material-UI core
import Books from '../Books/Books';
import './Home.css';
import PlsLogin from '../PlsLogin';
import { Bookbag } from '../App';

const Home = () => {
  const { logged, setLogged, loading, setLoading,user } = useContext(Bookbag);
  const [data, setData] = useState([]);
  const [story, setStory] = useState('');
  let sessionQueryCounter = 0;

  async function generateEbook(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios.get('');
      if (response.status === 200) {
        setData(response.data);
        sessionQueryCounter++;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container" style={{padding:"5%"}}>
      {logged ? (
        <div>
          {loading ? (
           "Loading..."
          ) : (
            <div>
              <h1>VeloBooks</h1>
              <Typography variant="h4">
                {sessionQueryCounter === 0
                  ? `Hi ${user.username}, Generate your favorite E-Book Today 📔`
                  : 'Anything else?'}
              </Typography>
              <form onSubmit={generateEbook} className="form-container">
                <TextField
                  onChange={(e) => {
                    setStory(e.target.value);
                  }}
                  placeholder={sessionQueryCounter === 0 ? 'Enter Story to Generate 🌟' : 'Perhaps, Generate Another Story?'}
                  type="text"
                  className="input-field"
                />
                <Button type="submit" variant="contained" disabled={loading}>
                  Generate EBook!
                </Button>
              </form>
            </div>
          )}
          <div className="books-container">
            {data && data.length ? (
              data.map((x, index) => <Books key={x.id || index} data={x} />)
            ) : sessionQueryCounter !== 0 ? (
              <Typography variant="body1">Wasnt able to generate Book! Please try again!</Typography>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <div>
          <PlsLogin />
        </div>
      )}
    </div>
  );
};

export default Home;

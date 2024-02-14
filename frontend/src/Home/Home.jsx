/* eslint-disable no-unused-vars */
// Home.js
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Books from '../Books/Books';
import './Home.css';

const Home = () => {
  const [logged, setLogged] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [story, setStory] = useState('');
 
  let sessionQueryCounter = 0;

  async function generateEbook(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios.get('https://yts.mx/api/v2/list_movies.json'); //http://localhost:8000/home//post//data
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
    <div className="container">
      {logged ? (
        <div>
          {loading ? (
            <div className="loader">
              <PacmanLoader color="yellow" />
            </div>
          ) : (
            <div>
              <h1>
                {sessionQueryCounter === 0
                  ? "Hi Velo, Generate your favorite EBook Today 📔" //username needs to be dynamic based on real username!x
                  : ''}
              </h1>
              <form onSubmit={generateEbook} className="form-container">
                <input
                  onChange={(e) => {
                    setStory(e.target.value);
                  }}
                  placeholder={sessionQueryCounter===0?"Enter Story to Generate 🌟" : "Perhaps, Generate Another Story?"}
                  type="text"
                  className="input-field"
                />
                <button type="submit" className="submit-btn">
                  Generate EBook!
                </button>
           
              </form>
            </div>
          )}
          <div className="books-container">
            {data && data.length ? (
              data.map((x, index) => <Books key={x.id || index} data={x} />,    )
            ) : sessionQueryCounter !== 0 ? (
              <div>Wasnt able to generate Book! Please try again!</div>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <div>
          <Link to="/login" className="login-link">
            Click Here to Login!
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;

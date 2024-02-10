/* eslint-disable @typescript-eslint/no-explicit-any */
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuth } from "../Firebase/fireconfig";
import { useContext, useState } from "react";
import { userData } from "../App";
import Axios from "axios";
import { Link } from "react-router-dom";

interface LoginState {
  username: string;
  password: string;
  // Add other properties as needed
}

const Login = () => {
  const { user, setUser, setStatus, loading, setLoading } =
    useContext<any>(userData);
  const [login, setLogin] = useState<LoginState>({
    username: "",
    password: "",
  });
  const handleLogin = async (e: Event) => {
    e.preventDefault();
    if (auth && auth.currentUser) {
      try {
        setLoading(true);
        const userCredential = await signInWithPopup(auth, googleAuth);
        setUser(userCredential.user);
        alert(`${user.displayName} logged in!`);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const loginRequest = await Axios.post("http://localhost:8000/user/login", login);
        if (loginRequest.status === 200) {
          setStatus("Logged in");
          setUser(loginRequest?.data?.response?.username);
        } else {
          setStatus("Couldn't login!");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>   
          <h1>Login!</h1>        
        <form onSubmit={handleLogin}>
        <input
          onChange={handleChange}
          name="username"
          placeholder="Enter username..."
          type="text"
        ></input>

        <input
          onChange={handleChange}
          name="password"
          placeholder="Enter password..."
          type="password"
        ></input>
        <button type="submit">Login</button>
      </form>
      <Link to="/">Home!</Link >
      </div>
  
      )}
    </div>
  );
};

export default Login;

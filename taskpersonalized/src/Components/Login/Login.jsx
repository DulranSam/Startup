/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import Axios from "axios";
import { theBag } from "../../App";

const Login = () => {
  const { user, setUser, setLoading, loading,BASE } = useContext(theBag);

  async function Login() {
    try {
      setLoading(true);
      const response = await Axios.post(`${BASE}/login`, user);
      if (response.status === 200) {
        alert(`${user.username} Logged in!`);
      } else {
        alert("Error while logging in!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={Login}>
        <input
          onChange={handleChange}
          name="username"
          placeholder="Enter username..."
          type="text"
          min={5}
          required
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="Enter password..."
          type="password"
          min={5}
          required
        />
        <button type="submit" disabled={loading}>
          Login!
        </button>
      </form>
    </div>
  );
};

export default Login;

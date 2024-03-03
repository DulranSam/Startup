/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { theBag } from "../../App";
import Axios from "axios";

const Tasks = () => {
  const { loading, setLoading, data, setData, BASE, tasks, setTasks,user } =
    useContext(theBag);
  const [text, setText] = useState("");

  const taskField = useRef();

  async function fetchTasks() {
    try {
      setLoading(true);
      const { data } = await Axios.post(`${BASE}/tasks`,{userName:user.username});
      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function addTasks(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios.post(BASE, text);
      if (response.status === 200) {
        setData(response.data);
        alert(`Taks ${text} was added!`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      taskField.current.value = "";
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Your tasks!</h1>
      <p>
        {tasks && tasks.length ? JSON.stringify(tasks) : "No results found!"}
      </p>
      <div>
        <form onSubmit={addTasks}>
          <input
            placeholder="Enter task..."
            type="text"
            required
            min={5}
            ref={taskField}
          />
          <button type="submit" disabled={loading}>
            Add Task!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tasks;

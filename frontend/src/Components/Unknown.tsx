import { Link } from "react-router-dom";

const UnknownPage = () => {
  return (
    <div>
      <h1>This is an unknown page!</h1>
      <Link to="/">Click Here to go back home! 😄</Link>
    </div>
  );
};

export default UnknownPage;

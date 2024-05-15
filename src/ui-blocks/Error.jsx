import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>Error Message</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Error;

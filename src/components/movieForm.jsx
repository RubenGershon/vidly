import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MovieForm = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Movie form {useParams().id}</h1>
      <Button
        className="btn btn-primary btn-sm"
        onClick={() => navigate("/movies")}
      >
        Save
      </Button>
    </div>
  );
};

export default MovieForm;

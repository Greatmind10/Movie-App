import "./mystyle.css";
import AllMovies from "./AllMovies";
const MovieCard = ({ title, description, rating, Posterurl, year }) => {
  return (
 
      <div className="container">
        <img
          className="myImg"
          src={
            Posterurl
              ? Posterurl
              : "https://i.pinimg.com/236x/3d/79/4e/3d794e19eab002d5c91f0b07491dda3f.jpg"
          }
          alt="Harry Potter"
        ></img>

        <h4>{title}</h4>
        <p>{description}</p>
        <p>Year:{year}</p>
        <p>Rating:{rating}</p>
      </div>
  
  );
};

export default MovieCard;

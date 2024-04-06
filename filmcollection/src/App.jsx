import movieObject from "./component/AllMovies";
import MoviesList from "./component/MoviesList";
import MovieCard from "./component/MovieCard";

const App = () => {
  
  const storedData = movieObject.map((item) => {
    
    return (
      <div>
        <MovieCard
          id={item.id}
          key={item.key}
          title={item.title}
          year={item.year}
          rating={item.rating}
          Posterurl={item.Posterurl}
        />
      </div>
    );

  })


  return (
    <div>
      <MoviesList />;
      {storedData}
    </div>
  );

}

export default App
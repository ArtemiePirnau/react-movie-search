import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ data }) => {
  let newMovieList = data.map((movie) => {
    const { title, imageSrc, rating } = movie;
    return (
      <MovieItem
        title={title}
        imageSrc={imageSrc}
        altAttr="movie image"
        rating={rating}
      />
    );
  });
  return (
    <ul className="movie__list">
      <div className="container">
        <div className="movie__list-items"> {newMovieList}</div>
      </div>
    </ul>
  );
};

export default MovieList;

import "./MovieItem.css";

const MovieItem = (props) => {
  const { title, imageSrc, altAttr, rating } = props;
  return (
    <li className="movie__item">
      <img src={imageSrc} alt={altAttr} className="movie__item-img" />
      <h3 className="movie__item-title">{title}</h3>
      <div className="movie__item-rate">
        <span className="movie__item-rating">{rating}</span>
        <span className="fa fa-star checked"></span>
      </div>
    </li>
  );
};

export default MovieItem;

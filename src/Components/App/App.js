import "./App.css";
import { Component } from "react";
import Header from "../Header/Header";
import SearchField from "../SearchField/SearchField";
import MovieList from "../MovieList/MovieList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Moonlight",
          imageSrc:
            "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
          rating: "9.5",
        },
        {
          title: "Joker",
          imageSrc:
            "https://cdn.vox-cdn.com/thumbor/XFS0EXUlCT30JmldywvOTnzxsPE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16003217/D3KNa87XgAY4tkO.jpg",
          rating: "10",
        },
        {
          title: "Nobody",
          imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8adBk2vSnXwMOnrlXTSfe8YV2CLlo4zllS9-EE3xmjnEFnc3oO1-YcyEX2xgRZrwXOM&usqp=CAU",
          rating: "8.6",
        },
        {
          title: "Black Widow",
          imageSrc:
            "https://www.ubuy.hu/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFGbStOK05uY0wuX0FDX1NMMTAwOF8uanBn.jpg",
          rating: "7.1",
        },
        {
          title: "Morbius",
          imageSrc: "https://i.redd.it/1rnz16hwx6s71.jpg",
          rating: "9.2",
        },
        {
          title: "Batman Arkham Knight",
          imageSrc:
            "https://cdn.europosters.eu/image/750/posters/batman-arkham-knight-cover-i24451.jpg",
          rating: "8.5",
        },
        {
          title: "The Amazing Spider Man",
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/en/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg",
          rating: "9.1",
        },
        {
          title: "Avengers Endgame",
          imageSrc:
            "https://i1.sndcdn.com/artworks-000504093942-htx4tx-t500x500.jpg",
          rating: "7.5",
        },
        {
          title: "Get Out",
          imageSrc:
            "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
          rating: "8.5",
        },
        {
          title: "IT (2017)",
          imageSrc:
            "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
          rating: "8.9",
        },
        {
          title: "John Wick",
          imageSrc:
            "https://imusic.dk/images/item/scaled/344/5705535052344/keanu-reeves-2015-john-wick-dvd-873.jpg",
          rating: "9.3",
        },
        {
          title: "Avatar (2009)",
          imageSrc:
            "https://i.pinimg.com/originals/9e/1a/ea/9e1aea5a6ccf89cf59c39158e8cd1fab.jpg",
          rating: "10",
        },
      ],
      term: "",
    };
  }
  searchMovie = (items, term) => {
    if (term === "") {
      return items;
    }

    return items.filter((elem) => {
      return elem.title.indexOf(term) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  render() {
    const { data, term } = this.state;
    const visibleData = this.searchMovie(data, term);
    return (
      <div className="app">
        <div className="app__box">
          <div className="container">
            <div className="app__box-inner">
              <Header />
              <SearchField onUpdateSearch={this.onUpdateSearch} />
            </div>
          </div>
        </div>
        <MovieList data={visibleData} />
      </div>
    );
  }
}

export default App;

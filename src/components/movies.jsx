import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import CustomPagination from "./customPagination";
import { paginate } from "../utils/paginates";
import MoviesTable from "./moviesTable";
import CustomListGroup from "./customListGroup";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: { _id: "", name: "All Genres" },
    sortColumn: { path: "title", order: "asc" },
  };

  constructor() {
    super();
    console.log("Movies - Constructor");
  }

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
    console.log("Movies - Did mount");
  }

  render() {
    console.log("Movies - render");
    const { movies, genres, pageSize, currentPage, selectedGenre, sortColumn } =
      this.state;

    const filteredByGenre = selectedGenre._id
      ? movies.filter((movie) => movie.genre._id === selectedGenre._id)
      : movies;

    const sorted = _.orderBy(
      filteredByGenre,
      [sortColumn.path],
      [sortColumn.order]
    );

    const currentPageMovies = paginate(sorted, currentPage, pageSize);
    if (currentPageMovies.length === 0)
      return <div>No movies in the database.</div>;

    return (
      <div className="row my-5">
        <div className="col-3">
          <CustomListGroup
            groups={genres}
            selectedGroup={selectedGenre}
            onGroupSelect={this.handleGroupSelect}
          />
        </div>
        <div className="col">
          <div>Showing {filteredByGenre.length} movies from the database.</div>
          <MoviesTable
            movies={currentPageMovies}
            onToggleLike={this.handleToggleLike}
            onDelete={this.handleDelete}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <CustomPagination
            itemsCount={filteredByGenre.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }

  handleDelete = (movieToDelete) => {
    const movies = this.state.movies.filter(
      (movie) => movie._id !== movieToDelete._id
    );
    this.setState({ movies });
  };

  handleToggleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].isLiked = !movies[index].isLiked;
    this.setState({ movies });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleGroupSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
}

export default Movies;

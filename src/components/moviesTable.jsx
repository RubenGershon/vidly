import Button from "react-bootstrap/Button";
import Like from "./like";
import { Component } from "react";
import CustomTable from "./customTable";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "likeBtn",
      content: (movie) => (
        <Like
          isLiked={movie.isLiked}
          onToggle={() => this.props.onToggleLike(movie)}
        />
      ),
    },
    {
      key: "deleteBtn",
      content: (movie) => (
        <Button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </Button>
      ),
    },
  ];

  render() {
    console.log("Movies Table -render");
    const { movies, onSort, sortColumn } = this.props;
    return (
      <CustomTable
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        items={movies}
      />
    );
  }
}

export default MoviesTable;

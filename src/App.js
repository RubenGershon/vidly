import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import React from "react";
import LoginForm from "./components/loginForm";
import "./CSS/App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />} />
          <Route path="/login" element={<LoginForm />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

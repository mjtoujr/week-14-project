import MovieList from "./components/movie_list/movie_list";
import movies from "./components/sample_movies";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>The Movie List</h1>
      </header>
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;

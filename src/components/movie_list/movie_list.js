import Movie from '../movie/movie';

export default function MovieList({ movies }) {  /* Will return all movies in a separate entry, keyed to the movie's id. */
    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
        ))}
        </div>
    );
}
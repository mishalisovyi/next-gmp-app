import { HomePage } from 'core/pages';
import { getMovies, getMovie } from 'entities/movie/services';

export async function getServerSideProps({ query, params }: any) {
  const { genre, sortBy, movie: movieId } = query;
  const { searchQuery } = params;

  const [
    { data: moviesList },
    selectedMovie
  ] = await Promise.all([
    getMovies({
      sortField: sortBy,
      genreFilter: genre,
      searchTerm: searchQuery
    }),
    movieId ? getMovie(movieId) : Promise.resolve(null)
  ])

  return {
    props: {
      moviesList,
      selectedMovie
    }
  }
}

export default HomePage
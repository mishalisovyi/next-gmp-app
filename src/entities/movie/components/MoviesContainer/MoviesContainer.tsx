import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'common/hooks';
import { Spinner } from 'common/ui';

import { State } from 'core/interfaces';

import { MoviesDashboard, MoviesFilterPanel } from 'entities/movie/components';
import { MOVIES_SORTING_SELECT_DATA, MOVIES_TABS_DATA } from 'entities/movie/constants';
import { requestGetMovies, setMoviesListIsOutdated } from 'entities/movie/store';

function MoviesContainerComponent() {
  const dispatch = useDispatch();

  const movies = useSelector((state: State) => state.movies.moviesList);
  const loading = useSelector((state: State) => state.movies.loadingBasic);
  const moviesListIsOutdated = useSelector((state: State) => state.movies.moviesListIsOutdated);

  const { getQueryParameters, setQueryParameters } = useRouter();
  const { sortBy, genre, searchQuery } = getQueryParameters();

  const sortField = useMemo(() => sortBy || MOVIES_SORTING_SELECT_DATA.defaultValue, [sortBy]);
  const genreFilter = useMemo(() => genre || MOVIES_TABS_DATA.defaultValue, [genre]);

  useEffect(() => {
    if (moviesListIsOutdated) {
      dispatch(requestGetMovies({
        sortField,
        genreFilter,
        searchTerm: searchQuery,
      }));
    }
  }, [dispatch, genreFilter, moviesListIsOutdated, searchQuery, sortField]);

  const handleMoviesSorting = useCallback((sortFieldValue: string) => {
    setQueryParameters({ sortBy: sortFieldValue });
    dispatch(setMoviesListIsOutdated(true));
  }, [dispatch, setQueryParameters]);

  const handleMoviesGenreFiltering = useCallback((genreFilterValue: string) => {
    setQueryParameters({ genre: genreFilterValue });
    dispatch(setMoviesListIsOutdated(true));
  }, [dispatch, setQueryParameters]);

  return (
    <>
      <MoviesFilterPanel
        defaultGenreFilter={genreFilter as string}
        defaultSortField={sortField as string}
        onSortingPerformed={handleMoviesSorting}
        onGenreFilterApplied={handleMoviesGenreFiltering}
      />
      {loading ? <Spinner /> : <MoviesDashboard movies={movies} />}
    </>
  );
}

export const MoviesContainer = memo(MoviesContainerComponent);

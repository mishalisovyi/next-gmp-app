import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { setHttpError } from 'common/store/actions';
import { Movie, MovieData, MoviesListRequestParameters } from 'entities/movie/interfaces';

import {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
  getMovie,
} from 'entities/movie/services';

import {
  MoviesState,
  MoviesAction,
  SetMoviesAction,
  SetMoviesBasicLoadingAction,
  SetSingleMovieLoadingAction,
  SetSelectedMovieAction,
  SetMoviesListIsOutdatedAction,
} from 'entities/movie/store';

// Simple actions

export const setMovies = (moviesList: Movie[]): SetMoviesAction => {
  return {
    moviesList,
    type: MoviesAction.SetMovies,
  };
};

export const setMoviesBasicLoading = (loadingBasic: boolean): SetMoviesBasicLoadingAction => {
  return {
    loadingBasic,
    type: MoviesAction.SetMoviesBasicLoading,
  };
};

export const setSingleMovieLoading = (loadingSingleMovie: boolean): SetSingleMovieLoadingAction => {
  return {
    loadingSingleMovie,
    type: MoviesAction.SetSingleMovieLoading,
  };
};

export const setSelectedMovie = (selectedMovie: Movie | null): SetSelectedMovieAction => {
  return {
    selectedMovie,
    type: MoviesAction.SetSelectedMovie,
  };
};

export const setMoviesListIsOutdated = (moviesListIsOutdated: boolean): SetMoviesListIsOutdatedAction => {
  return {
    moviesListIsOutdated,
    type: MoviesAction.SetMoviesListIsOutdated,
  };
};

// Thunk actions

export const getMoviesSuccess = (movies: Movie[]) => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(false));
    dispatch(setMovies(movies));
  };
};

export const getMoviesFailure = (error: Error) => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(false));
    dispatch(setMovies([]));
    dispatch(setHttpError(error));
  };
};

export const requestGetMovies = (moviesListRequestParameters: MoviesListRequestParameters): any => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(true));

    getMovies(moviesListRequestParameters)
      .then((response) => dispatch(getMoviesSuccess(response.data)))
      .catch((error) => dispatch(getMoviesFailure(error)))
      .finally(() => dispatch(setMoviesListIsOutdated(false)));
  };
};

export const getMovieSuccess = (movie: Movie) => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setSingleMovieLoading(false));
    dispatch(setSelectedMovie(movie));
  };
};

export const getMovieFailure = (error: Error) => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setSingleMovieLoading(false));
    dispatch(setSelectedMovie(null));
    dispatch(setHttpError(error));
  };
};

export const requestGetMovie = (movieId: number): any => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setSingleMovieLoading(true));

    getMovie(movieId)
      .then((response) => dispatch(getMovieSuccess(response)))
      .catch((error) => dispatch(getMovieFailure(error)));
  };
};

export const addMovieSuccess = () => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(false));
    dispatch(setMoviesListIsOutdated(true));
  };
};

export const addMovieFailure = (error: Error) => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(false));
    dispatch(setHttpError(error));
  };
};

export const requestAddMovie = (movieData: MovieData): any => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(true));

    addMovie(movieData)
      .then(() => dispatch(addMovieSuccess()))
      .catch((error) => dispatch(addMovieFailure(error)));
  };
};

export const editMovieSuccess = () => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(false));
    dispatch(setMoviesListIsOutdated(true));
  };
};

export const editMovieFailure = (error: Error) => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(false));
    dispatch(setHttpError(error));
  };
};

export const requestEditMovie = (movieData: MovieData): any => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(true));

    editMovie(movieData)
      .then(() => dispatch(editMovieSuccess()))
      .catch((error) => dispatch(editMovieFailure(error)));
  };
};

export const deleteMovieSuccess = () => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(false));
    dispatch(setMoviesListIsOutdated(true));
  };
};

export const deleteMovieFailure = (error: Error) => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(false));
    dispatch(setHttpError(error));
  };
};

export const requestDeleteMovie = (movieId: number): any => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setMoviesBasicLoading(true));

    deleteMovie(movieId)
      .then(() => dispatch(deleteMovieSuccess()))
      .catch((error) => dispatch(deleteMovieFailure(error)));
  };
};

export const selectMovie = (movie: Movie): any => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setSelectedMovie(movie));
  };
};

export const deselectMovie = (): any => {
  return (dispatch: ThunkDispatch<MoviesState, null, AnyAction>) => {
    dispatch(setSelectedMovie(null));
  };
};

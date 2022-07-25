import { AnyAction } from '@reduxjs/toolkit';

import {
  MoviesAction,
  MoviesState,
  SetMoviesAction,
  SetMoviesListIsOutdatedAction,
  SetMoviesBasicLoadingAction,
  SetSingleMovieLoadingAction,
  SetSelectedMovieAction,
} from 'entities/movie/store';

export const initialState: MoviesState = {
  moviesList: [],
  moviesListIsOutdated: false,
  selectedMovie: null,
  loadingBasic: false,
  loadingSingleMovie: false,
};

const setMovies = (state: MoviesState, { moviesList }: SetMoviesAction) => {
  return {
    ...state,
    moviesList,
  };
};

const setMoviesBasicLoading = (state: MoviesState, { loadingBasic }: SetMoviesBasicLoadingAction) => {
  return {
    ...state,
    loadingBasic,
  };
};

const setSingleMovieLoading = (state: MoviesState, { loadingSingleMovie }: SetSingleMovieLoadingAction) => {
  return {
    ...state,
    loadingSingleMovie,
  };
};

const setSelectedMovie = (state: MoviesState, { selectedMovie }: SetSelectedMovieAction) => {
  return {
    ...state,
    selectedMovie,
  };
};

const setMoviesListIsOutdated = (state: MoviesState, { moviesListIsOutdated }: SetMoviesListIsOutdatedAction) => {
  return {
    ...state,
    moviesListIsOutdated,
  };
};

export function moviesReducer(state = initialState, action: AnyAction): MoviesState {
  switch (action.type) {
    case MoviesAction.SetMovies: return setMovies(state, action as SetMoviesAction);
    case MoviesAction.SetMoviesBasicLoading: return setMoviesBasicLoading(state, action as SetMoviesBasicLoadingAction);
    case MoviesAction.SetSingleMovieLoading: return setSingleMovieLoading(state, action as SetSingleMovieLoadingAction);
    case MoviesAction.SetSelectedMovie: return setSelectedMovie(state, action as SetSelectedMovieAction);
    case MoviesAction.SetMoviesListIsOutdated: return setMoviesListIsOutdated(state, action as SetMoviesListIsOutdatedAction);

    default: return state;
  }
}

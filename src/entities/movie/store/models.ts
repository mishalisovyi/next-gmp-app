import { Action } from '@reduxjs/toolkit';

import { Movie } from 'entities/movie/interfaces';

// Actions types

export enum MoviesAction {
  RequestGetMovies = 'REQUEST_GET_MOVIES',
  RequestAddMovie = 'REQUEST_ADD_MOVIE',
  RequestEditMovie = 'REQUEST_EDIT_MOVIE',
  RequestDeleteMovie = 'REQUEST_DELETE_MOVIE',

  GetMoviesSuccess = 'GET_MOVIES_SUCCESS',
  AddMovieSuccess = 'ADD_MOVIE_SUCCESS',
  EditMovieSuccess = 'EDIT_MOVIES_SUCCESS',
  DeleteMovieSuccess = 'DELETE_MOVIE_SUCCESS',

  GetMoviesFailure = 'GET_MOVIES_FAILURE',
  AddMovieFailure = 'ADD_MOVIE_FAILURE',
  EditMovieFailure = 'EDIT_MOVIES_FAILURE',
  DeleteMovieFailure = 'DELETE_MOVIE_FAILURE',

  SetMovies = 'SET_MOVIES',
  SetMoviesBasicLoading = 'SET_MOVIES_BASIC_LOADING',
  SetSingleMovieLoading = 'SET_SINGLE_MOVIE_LOADING',
  SetSelectedMovie = 'SET_SELECTED_MOVIE',
  SetMoviesListIsOutdated = 'SET_MOVIES_LIST_IS_OUTDATED',
}

// Simple actions models

export interface SetMoviesAction extends Action<MoviesAction.SetMovies> {
  moviesList: Movie[];
}

export interface SetMoviesBasicLoadingAction extends Action<MoviesAction.SetMoviesBasicLoading> {
  loadingBasic: boolean;
}

export interface SetSingleMovieLoadingAction extends Action<MoviesAction.SetSingleMovieLoading> {
  loadingSingleMovie: boolean;
}

export interface SetSelectedMovieAction extends Action<MoviesAction.SetSelectedMovie> {
  selectedMovie: Movie | null;
}

export interface SetMoviesListIsOutdatedAction extends Action<MoviesAction.SetMoviesListIsOutdated> {
  moviesListIsOutdated: boolean;
}

// State

export interface MoviesState {
  moviesList: Movie[];
  moviesListIsOutdated: boolean;
  selectedMovie: Movie | null;
  loadingBasic: boolean;
  loadingSingleMovie: boolean;
}

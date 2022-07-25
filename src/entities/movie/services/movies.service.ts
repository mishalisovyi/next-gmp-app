import { API_URL } from 'common/constants';
import { ResponseEmpty, ResponseList, ResponseSimple } from 'common/types';
import {
  sendDeleteRequest,
  sendGetRequest,
  sendPostRequest,
  sendPutRequest,
} from 'common/services';

import { MOVIES_SORTING_SELECT_DATA, MOVIES_TABS_DATA } from 'entities/movie/constants';
import { Movie, MovieData, MoviesListRequestParameters } from 'entities/movie/interfaces';

const MOCKED_POSTER_PATH = 'https://images.unsplash.com/photo-1567981964482-ce4df477dd67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NjYzNzQ0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

export const getMovies = ({
  sortField = MOVIES_SORTING_SELECT_DATA.defaultValue,
  genreFilter = MOVIES_TABS_DATA.defaultValue,
  searchTerm = '',
}: MoviesListRequestParameters = {}): ResponseList<Movie> => {
  const url = `${API_URL}/movies?sortBy=${sortField}&sortOrder=desc&search=${searchTerm}&searchBy=title&filter=${genreFilter}`;

  return sendGetRequest(url);
};

export const getMovie = (movieId: number): ResponseSimple<Movie> => {
  const url = `${API_URL}/movies/${movieId}`;

  return sendGetRequest(url);
};

export const addMovie = (movieData: MovieData): ResponseSimple<Movie> => {
  const url = `${API_URL}/movies`;

  return sendPostRequest(url, {
    ...movieData,
    poster_path: MOCKED_POSTER_PATH,
  });
};

export const editMovie = (movieData: MovieData): ResponseSimple<Movie> => {
  const url = `${API_URL}/movies`;

  return sendPutRequest(url, movieData);
};

export const deleteMovie = (movieId: number): ResponseEmpty => {
  const url = `${API_URL}/movies/${movieId}`;

  return sendDeleteRequest(url);
};

import { CommonState } from 'common/store';
import { MoviesState } from 'entities/movie/store';

export interface State {
  common: CommonState
  movies: MoviesState;
}

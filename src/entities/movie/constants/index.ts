import { SelectListData, TabsData } from 'common/interfaces';
import { MovieMenuItems } from 'entities/movie/enums';

// Business logic data

export const MOVIES_GENRES = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Family', 'Fantasy', 'Romance', 'Science Fiction'];

// Popups

export const DELETE_MOVIE_POPUP_CONFIRMATION_TITLE = 'Delete movie';
export const DELETE_MOVIE_POPUP_CONFIRMATION_MESSAGE = 'Are you sure you want to delete this movie?';

// Tabs

export const MOVIES_TABS_DATA: TabsData = {
  defaultValue: '',
  items: [{
    title: 'All',
    value: '',
  }, {
    title: 'Action',
    value: 'Action',
  }, {
    title: 'Adventure',
    value: 'Adventure',
  }, {
    title: 'Animation',
    value: 'Animation',
  }, {
    title: 'Comedy',
    value: 'Comedy',
  }, {
    title: 'Drama',
    value: 'Drama',
  }, {
    title: 'Family',
    value: 'Family',
  }, {
    title: 'Fantasy',
    value: 'Fantasy',
  }, {
    title: 'Romance',
    value: 'Romance',
  }, {
    title: 'Science Fiction',
    value: 'Science Fiction',
  }],
};

// Sorting

export const MOVIES_SORTING_SELECT_DATA: SelectListData = {
  defaultValue: 'vote_average',
  items: [{
    title: 'Title',
    value: 'title',
  }, {
    title: 'Vote average',
    value: 'vote_average',
  }, {
    title: 'Vote count',
    value: 'vote_count',
  }, {
    title: 'Release date',
    value: 'release_date',
  }, {
    title: 'Budget',
    value: 'budget',
  }, {
    title: 'Revenue',
    value: 'revenue',
  }, {
    title: 'Runtime',
    value: 'runtime',
  }],
};

// Menu

export const MOVIE_MENU_ITEMS = [MovieMenuItems.Edit, MovieMenuItems.Delete];

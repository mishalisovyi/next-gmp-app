import { SelectListValue } from 'common/interfaces';

export interface MoviesListRequestParameters {
  sortField?: SelectListValue | null;
  genreFilter?: string | null;
  searchTerm?: string | null;
}

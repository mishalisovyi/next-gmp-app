import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Field,
  Form,
  Formik,
  FormikProps,
  FormikValues,
} from 'formik';
import * as Yup from 'yup';

import { PopupDialog, Spinner } from 'common/ui';
import { State } from 'core/interfaces';

import { MOVIES_GENRES } from 'entities/movie/constants';
import { Movie, MovieData } from 'entities/movie/interfaces';
import { requestAddMovie, requestEditMovie } from 'entities/movie/store';

import styles from './MovieFormPopup.module.scss';

interface MovieFormPopupProps {
  onClose: (parameter: { confirmed: boolean }) => void;
  movie?: Movie;
}

const initialValues = {
  title: '',
  release_date: '',
  poster_path: '',
  vote_average: '',
  genres: '',
  runtime: '',
  overview: '',
};

const parseMovieDataToFormData = (movie: Partial<Movie> = {}) => ({
  title: movie.title || '',
  release_date: movie.release_date || '',
  poster_path: movie.poster_path || '',
  vote_average: movie.vote_average || '',
  genres: movie.genres ? (movie.genres[0] || '') : '',
  runtime: movie.runtime || '',
  overview: movie.overview || '',
});

const parseFormDataToMovieData = (formData: FormikValues): MovieData => ({
  title: formData.title,
  tagline: 'Some test tagline',
  vote_average: parseFloat(formData.vote_average),
  vote_count: 1,
  release_date: formData.release_date,
  poster_path: formData.poster_path,
  overview: formData.overview,
  budget: 100_000_000,
  revenue: 120_000_000,
  genres: [formData.genres],
  runtime: parseInt(formData.runtime, 10),
});

const MovieFormValidationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  release_date: Yup.date(),
  poster_path: Yup.string().required('Required').url('Must be a valid URL'),
  vote_average: Yup.number().min(0, 'Can not be less than 0'),
  genres: Yup.string().required('Required'),
  runtime: Yup.number().required('Required').min(1, 'Can not be less than 1'),
  overview: Yup.string().required('Required'),
});

export function MovieFormPopup({ onClose, movie }: MovieFormPopupProps) {
  const formRef = useRef<FormikProps<FormikValues>>(null);
  const dispatch = useDispatch();
  const loading = useSelector((state: State) => state.movies.loadingBasic);

  const handlePopupDialogPrimaryButtonClick = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handlePopupDialogSecondaryButtonClick = () => {
    if (formRef.current) {
      formRef.current.setValues(initialValues);
    }
  };

  const handlePopupDialogClose = useCallback(() => {
    onClose({ confirmed: false });
  }, [onClose]);

  const handleFormSubmit = useCallback((formData: FormikValues) => {
    const movieData = parseFormDataToMovieData(formData);

    dispatch(movie ? requestEditMovie({ ...movieData, id: movie.id }) : requestAddMovie({ ...movieData }));

    onClose({ confirmed: true });
  }, [dispatch, movie, onClose]);

  return (
    <PopupDialog
      title={`${movie ? 'Edit' : 'Add'} movie`}
      onPrimaryButtonClick={handlePopupDialogPrimaryButtonClick}
      onSecondaryButtonClick={handlePopupDialogSecondaryButtonClick}
      onClose={handlePopupDialogClose}
    >
      <Formik
        initialValues={movie ? parseMovieDataToFormData(movie) : initialValues}
        validationSchema={MovieFormValidationSchema}
        onSubmit={handleFormSubmit}
        innerRef={formRef}
      >
        {({ errors, submitCount }) => {
          return loading ? <Spinner /> : (
            <Form className={styles['MovieFormPopup__form']}>
              <div className={styles['form__main-info']}>
                <div className={`form-group${errors.title && submitCount > 0 ? ' form-group--has-error' : ''}`}>
                  <label className="form-group__label">Title</label>
                  <Field className="form-group__control" name="title" placeholder="Title" />
                  <div className="form-group__validation-message">{errors.title as string}</div>
                </div>

                <div className={`form-group${errors.release_date && submitCount > 0 ? ' form-group--has-error' : ''}`}>
                  <label className="form-group__label">Release Date</label>
                  <Field className="form-group__control" type="date" name="release_date" placeholder="Select date" />
                  <div className="form-group__validation-message">{errors.release_date as string}</div>
                </div>

                <div className={`form-group${errors.poster_path && submitCount > 0 ? ' form-group--has-error' : ''}`}>
                  <label className="form-group__label">Movie URL</label>
                  <Field className="form-group__control" name="poster_path" placeholder="URL" />
                  <div className="form-group__validation-message">{errors.poster_path as string}</div>
                </div>

                <div className={`form-group${errors.vote_average && submitCount > 0 ? ' form-group--has-error' : ''}`}>
                  <label className="form-group__label">Rating</label>
                  <Field className="form-group__control" type="number" step="0.1" name="vote_average" placeholder="Rating score" />
                  <div className="form-group__validation-message">{errors.vote_average as string}</div>
                </div>

                <div className={`form-group${errors.genres && submitCount > 0 ? ' form-group--has-error' : ''}`}>
                  <label className="form-group__label">Genre</label>
                  <Field className="form-group__control" as="select" name="genres" placeholder="Select genre">
                    <option disabled value="">Select genre</option>
                    {MOVIES_GENRES.map((genre) => (<option value={genre} key={genre}>{genre}</option>))}
                  </Field>
                  <div className="form-group__validation-message">{errors.genres as string}</div>
                </div>

                <div className={`form-group${errors.runtime && submitCount > 0 ? ' form-group--has-error' : ''}`}>
                  <label className="form-group__label">Runtime</label>
                  <Field className="form-group__control" type="number" name="runtime" placeholder="Runtime (minutes)" />
                  <div className="form-group__validation-message">{errors.runtime as string}</div>
                </div>
              </div>

              <div className={`form-group${errors.overview && submitCount > 0 ? ' form-group--has-error' : ''}`}>
                <label className="form-group__label">Overview</label>
                <Field className="form-group__control" as="textarea" rows={3} name="overview" placeholder="Movie description" />
                <div className="form-group__validation-message">{errors.overview as string}</div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </PopupDialog>
  );
}

MovieFormPopup.defaultProps = {
  movie: null,
};

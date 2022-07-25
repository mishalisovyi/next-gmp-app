import Link from 'next/link';

import React, {
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from 'common/constants';
import { ButtonType } from 'common/enums';
import { useRouter } from 'common/hooks';
import {
  Button,
  Logo,
  PopupInfo,
  SearchPanel,
  Spinner,
} from 'common/ui';

import { State } from 'core/interfaces';

import { MovieDetails, MovieFormPopup } from 'entities/movie/components';
import { setMoviesListIsOutdated } from 'entities/movie/store';

import styles from './HomePageHeader.module.scss';

function HomePageHeaderComponent() {
  const dispatch = useDispatch();
  const movie = useSelector((state: State) => state.movies.selectedMovie);
  const loading = useSelector((state: State) => state.movies.loadingSingleMovie);

  const { navigate, getQueryParameters } = useRouter();

  const [showAddMoviePopupDialog, setShowAddMoviePopupDialog] = useState(false);
  const [showMovieAddedPopupInfo, setShowMovieAddedPopupInfo] = useState(false);

  const handleAddMovieButtonClick = useCallback(() => {
    setShowAddMoviePopupDialog(true);
  }, []);

  const handleMoviesSearch = useCallback((searchTerm: string) => {
    navigate(`/search/${searchTerm}`, { preserveQueryParameters: true });
    dispatch(setMoviesListIsOutdated(true));
  }, [dispatch, navigate]);

  const handleMovieFormPopupClosing = useCallback(({ confirmed = false } = {}) => {
    setShowAddMoviePopupDialog(false);

    if (confirmed) {
      setShowMovieAddedPopupInfo(true);
    }
  }, []);

  const handleMovieAddedPopupClosing = useCallback(() => {
    setShowMovieAddedPopupInfo(false);
  }, []);

  const bodyOffsetClass = useMemo(() => {
    return movie ? '' : styles['HomePageHeader__body--offset'];
  }, [movie]);

  const headerHeadContent = useMemo(() => {
    return !loading && (
      movie ? (
        <Link href="/search">
          <a>
            <Button
              type={ButtonType.Search}
              text={Icon.TELEPHONE_RECORDER}
            />
          </a>
        </Link>
      ) : <Button type={ButtonType.Tertiary} text="+ ADD MOVIE" onClick={handleAddMovieButtonClick} />
    );
  }, [loading, movie, handleAddMovieButtonClick]);

  const headerBodyContent = useMemo(() => {
    if (loading) {
      return <Spinner />;
    }

    const { searchQuery } = getQueryParameters()

    return movie ? <MovieDetails movie={movie} /> : <SearchPanel labelText="Find your movie" value={searchQuery as string} onSearch={handleMoviesSearch} />;
  }, [loading, getQueryParameters, movie, handleMoviesSearch]);

  return (
    <>
      <header className={styles['HomePageHeader']}>
        <div className={styles['HomePageHeader__head']}>
          <Logo />
          {headerHeadContent}
        </div>

        <div className={`${styles['HomePageHeader__body']} ${bodyOffsetClass}`}>
          {headerBodyContent}
        </div>
      </header>

      {showAddMoviePopupDialog && <MovieFormPopup onClose={handleMovieFormPopupClosing} />}

      {showMovieAddedPopupInfo && <PopupInfo title="Congratulations !" message="The movie has been added to database successfully" onClose={handleMovieAddedPopupClosing} />}
    </>
  );
}

export const HomePageHeader = memo(HomePageHeaderComponent);

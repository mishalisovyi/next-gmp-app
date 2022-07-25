import Image from 'next/image';
import React, { memo } from 'react';

import { LabelPrimary } from 'common/ui';
import { formatMinutesTimeRange } from 'common/util';
import { Movie } from 'entities/movie/interfaces';

import styles from './MovieDetails.module.scss';

interface MovieDetailsProps {
  movie: Movie;
}

function MovieDetailsComponent({ movie }: MovieDetailsProps) {
  return (
    <article className={styles['MovieDetails']}>
      <div className={styles['MovieDetails__poster']}>
        <Image src={movie.poster_path} alt={movie.title} width={320} height={450} />
      </div>

      <div className={styles['MovieDetails__main-block']}>
        <div className={styles['main-block__header']}>
          <h1 className={styles['main-block__title']}>{movie.title}</h1>
          <LabelPrimary value={movie.vote_average} />
          <div className={styles['main-block__tagline']}>{movie.tagline}</div>
        </div>
        <div className={styles['main-block__secondary-info']}>
          <div className={styles['main-block__secondary-info-item']}>{new Date(movie.release_date).getFullYear()}</div>
          <div className={styles['main-block__secondary-info-item']}>{formatMinutesTimeRange(movie.runtime)}</div>
        </div>
        <p className={styles['main-block__overview']}>{movie.overview}</p>
      </div>
    </article>
  );
}

export const MovieDetails = memo(MovieDetailsComponent);

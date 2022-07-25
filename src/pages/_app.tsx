import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

import { commonInitialState } from 'common/store';
import { useStore } from 'core/store';
import { moviesInitialState } from 'entities/movie/store';

import 'styles.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore({
    movies: {
      ...moviesInitialState,
      moviesList: pageProps.moviesList,
      selectedMovie: pageProps.selectedMovie
    },
    common: {
      ...commonInitialState
    }
  })

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

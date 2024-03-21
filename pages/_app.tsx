import '../styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '../components/layout';
import {wrapper} from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
    </Provider>
  )
}

export default MyApp
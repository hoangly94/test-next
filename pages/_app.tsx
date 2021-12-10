import type { AppProps } from 'next/app'
import 'sezy-design/css/variables.css';
import 'sezy-design/css/default.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

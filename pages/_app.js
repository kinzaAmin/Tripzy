import '@/styles/globals.css'
import DefaultLayout from '@/Component/Layout/DefaultLayout'

export default function App({ Component, pageProps }) {

  return (<DefaultLayout>
     
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

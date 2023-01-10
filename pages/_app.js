import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/CustomNavbar'
import CustomFooter from '../components/CustomFooter'
import Head from 'next/head'
 

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      </Head>

      <CustomNavbar/>
      <Component {...pageProps} />
      <CustomFooter/>
    </>
  )
}

export default MyApp

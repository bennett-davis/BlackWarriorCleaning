import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/CustomNavbar'
 

function MyApp({ Component, pageProps }) {

  return (
    <>
      <CustomNavbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

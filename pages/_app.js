import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/CustomNavbar'
import CustomFooter from '../components/CustomFooter'
 

function MyApp({ Component, pageProps }) {

  return (
    <>
      <CustomNavbar/>
      <Component {...pageProps} />
      <CustomFooter/>
    </>
  )
}

export default MyApp

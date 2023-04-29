import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/CustomNavbar'
import CustomFooter from '../components/CustomFooter'
import Head from 'next/head'
 

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Black Warrior Cleaning Pros</title>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Black Warrior Cleaning Pros LLC"/>
        <meta property="og:description" content="We are a Tuscaloosa based, all around washing and cleaning services company. Services include: exterior home soft wash and pressure washing, interior cleaning, and car detailng. The services we offer help provide an overall cleanliness while ensuring convenience to you and your family." key="desc"/>
        <meta property="og:url" content="https://BlackWarriorCleaningPros.com/"/>
        <meta property="og:image" content= "/assets/circle_logo_opengraph.png"/>
        <meta property="og:site_name" content="Black Warrior Cleaning Pros LLC" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <link rel="canonical" href="http://blackwarriorcleaningpros.com/" />
      </Head>

      <CustomNavbar/>
      <Component {...pageProps} />
      <CustomFooter/>
    </>
  )
}

export default MyApp

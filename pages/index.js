import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
 import { Container, 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardSubtitle, 
  CardText, 
  CardTitle, 
  Button, 
  CardImgOverlay} 
  from 'reactstrap'
  import 'bootstrap/dist/css/bootstrap.min.css';




export default function Home() {
  
  const phone = "(205) 861-3320"
  const email = "BlackWarriorCleaningPros@gmail.com"

  const galleryList = [
    "/assets/gallery/home_soft_wash_1.jpg",
    "/assets/gallery/home_soft_wash_2.jpg",
    "/assets/gallery/home_soft_wash_3.jpg",

    "/assets/gallery/car_detailing_1.jpg",
    "/assets/gallery/car_detailing_2.jpg",
    "/assets/gallery/car_detailing_3.jpg",

    "/assets/gallery/interior_cleaning_1.jpg",
    "/assets/gallery/interior_cleaning_2.jpg",
    "/assets/gallery/interior_cleaning_3.jpg"
  ]

  const cardList = [
    
    {
      cardName : "Car Detailing",
      img: "/assets/car_detailing_4.jpg",
      description: "Car Wash and Detail",
      link: "/car_detailing"
    },
    {
      cardName : "Home Soft Washing",
      img: "/assets/home_softwash_1.jpg",
      description: "Our Home Wash Services Include: Roof, Siding, Gutter, Flatwork, Fence, and Porch",
      link: "/soft_wash"
    },
    { 
      cardName : "Interior Home Cleaning",
      img: "/assets/interior_1.jpg",
      description: "Interior services",
      link: "/interior_cleaning"

    }
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Black Warrior Cleaning Pros</title>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Black Warrior Cleaning Pros LLC"/>
        <meta property="og:description" content="We are a Tuscaloosa based, all around washing and cleaning services company. Services include: exterior home soft wash and pressure washing, interior cleaning, and car detailng. The services we offer help provide an overall cleanliness while ensuring convenience to you and your family." key="desc"/>
        <meta property="og:url" content="http://blackwarriorcleaningpros.com/"/>
        <meta property="og:image" content= "/assets/circle_logo_opengraph.png"/>
        <meta property="og:site_name" content="Black Warrior Cleaning Pros LLC" />

        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>


        <link rel="canonical" href="http://blackwarriorcleaningpros.com/" />



      </Head>

     
      <main className={styles.main}>
       
           <div className={styles.headerContainer}>
            <h1>BLACK WARRIOR CLEANING PROS</h1>
            <h4>Tuscaloosa based cleaning services, for homes and businesses.</h4>
            <h3>Contact Us</h3>
            <div className={styles.divider2}/>
            <h2>{phone}</h2>
            <h2>{email}</h2>
          </div>

          <h1>Services</h1>
          <div className={styles.divider3}/>

          
          <div className={styles.indexContainer}>
            <Row>
              {cardList.map((card, index) => CustomCard(card, index))}
            </Row>
          </div>
           
          <div className={styles.about}>
            <h3>About Us</h3>
            <div className={styles.divider}/>
            <p>We are a Tuscaloosa based, all around washing and cleaning services company. 
              We strive to build trust and provide a great service by paying close attention to the small details.
              The services we offer help provide an overall cleanliness while ensuring convenience to you and your family.
              Call us today for a free quote and give us a chance to serve you with excellence. </p>
          </div>


          <div className={styles.gallery}>
            <h3>Gallery</h3>
            <div className={styles.divider4}/>
            
            <div>
              <Row>
                  {galleryList.map((picture, index) => GalleryPicture(picture, index))}
              </Row>
            </div>
            
          </div>


      </main>
      
    </div>
  )
}



export function CustomCard ( card ) {
  return (
    
    <Col className={styles.card} xs="12" lg="4" key={card.img.toString()}>
      
      <h2>{card.cardName}</h2>
      <Link href={card.link}>

     
      <Card >
        
        <div className={styles.imageShadow}>
        
          <Image className={styles.image}
            alt="Sample"
            src={card.img}
            width="450px"
            height="450px"
            quality={100}
            layout="responsive" 
            
          />
          <CardImgOverlay className={styles.cardContent}>
            <Button className={styles.button}>Learn More</Button>
          </CardImgOverlay>
        </div>
        
      </Card>

      </Link>

      {/* <h3>{card.description}</h3> */}
      
      
  
    </Col>
    
        
  )
}

export function GalleryPicture(picture, index) {
   return (

      <Col className={styles.galleryCol} xs="12"  md="6" lg="4" key={picture.toString()}>
        <div className={styles.galleryImageShadow}>
          <Image className={styles.galleryImage}
            alt="Sample"
            src={picture}
            width={450}
            height={450}
            quality={100}
            layout="intrinsic" 
          />
        </div>
        
      </Col>
   
  )
}
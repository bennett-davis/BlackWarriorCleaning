import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import {Row, Col} from 'reactstrap'
 
export default function CarDetailing () {

    const phone = "(205) 861-3320"
    const email = "BlackWarriorCleaningPros@gmail.com"
    const interior_description = "Full car detailing services include a deep clean of the interior and exterior of the vehicle. Exterior car wash only option also available. We will come to you!"

    return (
        
        <div className={styles.softwash}>
            <Head>
                <title>Black Warrior Cleaning Pros</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="assets\circle_logo.png" />
            </Head>

            <div className={styles.softwashHeader}>
                <h1>Car Detailing</h1>
                <h3>Get A Quote</h3>
                <h5>{phone} | {email}</h5>
            </div>
            
            <Row className={styles.carHeader}>
                <div className={styles.galleryImageWrapper}>
                    <Image className={styles.galleryImage}
                        alt="Sample"
                        src="/assets/car_detailing_4.jpg"
                        quality={100}
                        layout="fill" 
                    />
                </div>
                <div className={styles.galleryImageWrapper}>
                    <Image className={styles.galleryImage}
                        alt="Sample"
                        src="/assets/car_detailing_5.jpg"
                        quality={100}
                        layout="fill" 
                    />
                </div>
                <div className={styles.galleryImageWrapper}>
                    <Image className={styles.galleryImage}
                        alt="Sample"
                        src="/assets/car_detailing_6.jpg"
                        quality={100}
                        layout="fill" 
                    />
                </div>
            </Row>
            
            <div className={styles.about}>
                <h3>Car Services</h3>
                <div className={styles.divider5}/>
                <p>{interior_description}</p>
            </div>
            

            {/* <div className={styles.carServices}>
                <h2>Car Services</h2>
                <div className={styles.divider3}/>
                <Row className={styles.swRow}>
                    <Col className={styles.serviceBox} xs="12" lg="5">
                        <h4>Full Service</h4>
                        <div className={styles.divider6}/>
                        <p>We use a safe mixture of mild chemicals and low water pressure to remove organic buildup. This increases the condition and lifetime of your roof without damaging your shingles or metal work. </p>
                    </Col>
                    <Col className={styles.serviceBox} xs="12" lg="5">
                        <h4>Exterior Only</h4>
                        <div className={styles.divider6}/>
                        <p>Soft wash formula specific to the type of siding that you have, whether painted wood, vinyl, masonry or anything in between. </p>
                    </Col>
                     
                    
                </Row>

                
            </div> */}
            <div className={styles.softWashContact}>
                    <h2>Contact Us</h2>
                    <div className={styles.divider6}/>
                    <h2>{phone}</h2>
                    <h2>{email}</h2>
                </div>
        </div>
        
    )
}
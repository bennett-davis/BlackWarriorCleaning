import styles from '../styles/soft_wash.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import {Row, Col} from 'reactstrap'

export default function SoftWash () {

    const phone = "(205) 861-3320"
    const email = "BlackWarriorCleaningPros@gmail.com"
    const soft_wash_description = "Soft Washing is an innovative cleaning process used on the exterior of homes or buildings, using a safe mixture of chemicals that work better than traditional pressure washing techniques. Algae and other types of buildup are mother nature's way of decomposing materials. That is why it is imperative to maintain property maintenance and cleanliness in order for it to always look nice and last. We achieve not only a clean surface, but also a deeper clean that kills bad organic buildup down in the pores of the surface. This results in longer lasting clean surfaces. "

    return (
        
        <div className={styles.softwash}>
            <Head>
                <title>Black Warrior Cleaning Pros</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="assets\circle_logo.png" />
            </Head>

            <main className={styles.main}>

            <div className={styles.softwashHeader}>
                <h1>Home Soft Washing</h1>
                <h3>Get A Quote</h3>
                <h5>{phone}</h5>
                <h5>{email}</h5>
            </div>
            

            <Row className={styles.headerContainerSoftwash}>
                <Image  
                    alt="Sample"
                    src="/assets/softwash_1.jpg"
                    width="550px"
                    height="350px"
                    quality={100}
                    layout="fixed" 
                />
                <Image  
                    alt="Sample"
                    src="/assets/softwash_2.jpg"
                    width="550px"
                    height="350px"
                    quality={100}
                    layout="fixed" 
                />
            </Row>

            
            <div className={styles.about}>
                <h3>About Soft Washing</h3>
                <div className={styles.divider5}/>
                <p>{soft_wash_description}</p>
            </div>
            

            <div className={styles.softWashServices}>
                <h2>Soft Wash Services</h2>
                <div className={styles.divider3}/>
                <Row className={styles.swRow}>
                    <Col className={styles.serviceBox} xs="12" lg="5">
                        <h4>Roof</h4>
                        <div className={styles.divider6}/>
                        <p>We use a safe mixture of mild chemicals and low water pressure to remove organic buildup. This increases the condition and lifetime of your roof without damaging your shingles or metal work. </p>
                    </Col>
                    <Col className={styles.serviceBox} xs="12" lg="5">
                        <h4>Siding</h4>
                        <div className={styles.divider6}/>
                         <p>Soft wash formula specific to the type of siding that you have, whether painted wood, vinyl, masonry or anything in between. </p>
                    </Col>
                    <Col className={styles.serviceBox} xs="12" lg="5">
                        <h4>Gutter</h4>
                        <div className={styles.divider6}/>
                         <p>Soft wash technique to clean the visible portions of your gutters and bring them back to life. </p>

                    </Col>
                    <Col className={styles.serviceBox} xs="12" lg="5">
                        <h4>Flatwork</h4>
                        <div className={styles.divider6}/> 
                         <p>Remove organic buildup from sidewalks and driveways to maintain the look and integrity of your home or business.  </p>

                    </Col>
                    <Col className={styles.serviceBox} xs="12" lg="5">
                        <h4>Fence</h4>
                        <div className={styles.divider6}/>
                         <p>Soft wash formula specific to get deep in the wood grain. This will clean and protect the wood without risking any cracking. </p>
                    </Col>
                    <Col className={styles.serviceBox} xs="12" lg="5">
                        <h4>Window Wash</h4>
                        <div className={styles.divider6}/>
                         <p>Commercial or residential service offered with options including exterior only, interior only, or exterior and interior.</p>
                    </Col>
                </Row>

                <div className={styles.softWashContact}>
                    <h2>Contact Us</h2>
                    <div className={styles.divider6}/>
                    <h2>{phone}</h2>
                    <h2>{email}</h2>
                </div>
            </div>
            </main>
        </div>
        
    )
}
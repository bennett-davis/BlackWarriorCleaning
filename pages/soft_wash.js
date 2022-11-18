import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import {Row, Col} from 'reactstrap'

export default function SoftWash () {

    const soft_wash_description = "Soft Washing is an innovative cleaning process used on the exterior of homes or buildings, using a safe mixture of chemicals that work better than traditional pressure washing techniques. Algae and other types of buildup are mother nature's way of decomposing materials. That is why it is imperative to maintain property maintenance and cleanliness in order for it to always look nice and last. We achieve not only a clean surface, but also a deeper clean that kills bad organic buildup down in the pores of the surface. This results in longer lasting clean surfaces. "

    return (
        
        <div className={styles.softwash}>
            <Head>
                <title>Black Warrior Cleaning Pros</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Home Soft Washing</h1>

            <Row className={styles.headerContainerSoftwash}>
                <Col>
                    <h3>Roof Wash</h3>
                    <Image className={styles.image}
                        alt="Sample"
                        src="/assets/clean_house.jpg"
                        width="350px"
                        height="350px"
                        quality={100}
                        layout="fixed" 
                    />
                </Col>
                <Col>
                    <h3>Siding Wash</h3>
                    <Image className={styles.image}
                        alt="Sample"
                        src="/assets/clean_house.jpg"
                        width="350px"
                        height="350px"
                        quality={100}
                        layout="fixed" 
                    />  
                </Col> 
                <Col> 
                    <h3>Flatwork Wash</h3>
                    <Image className={styles.image}
                        alt="Sample"
                        src="/assets/clean_house.jpg"
                        width="350px"
                        height="350px"
                        quality={100}
                        layout="fixed" 
                    />
                </Col> 
                <Col>  
                    <h3>Fence Wash</h3>  
                    <Image className={styles.image}
                        alt="Sample"
                        src="/assets/clean_house.jpg"
                        width="350px"
                        height="350px"
                        quality={100}
                        layout="fixed" 
                    />    
                </Col>
                
    
            </Row>
                
            <h4>About Soft Washing</h4>
            <p>{soft_wash_description}</p>

        </div>
        
    )
}
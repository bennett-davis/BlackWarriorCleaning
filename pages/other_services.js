import styles from '../styles/other_services.module.scss'
import Image from 'next/image'
import Head from 'next/head'


const imageSrc4 = '/assets/floor_remodel_0.jpg';
const imageSrc3 = '/assets/stair_remodel_0.jpg';
const imageSrc2 = '/assets/stair_remodel_3.jpg';
const imageSrc1 = '/assets/floor_remodel_4.jpg';

const infoText = "At Black Warrior Cleaning Pros, we specialize in cleaning services, but also offer a range of other home services. For certain services outside of our expertise, we work with trusted contractors to ensure our clients receive top-quality results."
const stairRemodelDescription ="This project involved the transformation of carpeted stairs and flooring into stunning hardwood finishes. With meticulous attention to detail, we carefully removed all of the carpet and replaced it with premium hardwood flooring that we skillfully stained to match the customer's preferences. To accommodate their vision for a grander entrance, we took on the challenge of reframing the stairs to create a wider base that beautifully complements the new flooring."


export default function OtherServices () {

    return (
        <div className={styles.main}>

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


                <link rel="canonical" href="https://blackwarriorcleaningpros.com/" />



            </Head>
            <div className={styles.info}>
                <h1>BLACK WARRIOR CLEANING PROS</h1>
                <h2>Other Projects</h2>
                <h3>{infoText}</h3>
            </div>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                    <Image className={styles.imageStyle}
                        src={imageSrc1}
                        alt="Image"
                        layout='fill'
                    />
                    </div>
                    <div className={styles.image}>
                    <Image className={styles.imageStyle}
                        src={imageSrc2}
                        alt="Image"
                        layout='fill'
                    />
                    </div>
                    <div className={styles.image}  >
                    <Image className={styles.imageStyle}
                        src={imageSrc3}
                        alt="Image"
                        layout='fill'
                    />
                    </div>
                    <div className={styles.image}>

                    <Image className={styles.imageStyle}
                        src={imageSrc4}
                        alt="Image"
                        layout='fill'
                    />
                    </div>
                    
                </div>
                <div className={styles.serviceInfo}>
                    <h3 >Stair Remodel and Hardwood Floor Install</h3>
                    <p>{stairRemodelDescription}</p>
                </div>
            </div>
        </div>
        
    )
}



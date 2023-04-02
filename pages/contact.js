import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/contact.module.scss'
import Image from "next/image";




export default function Contact () {

    const name = "Gio Ramos"

    return (
    
        <div>
            <Head>

            </Head>
            <main>
                <div className={styles.body}>
                    <h1 style={{"font-weight": "bold", textAlign: "center", fontSize: "3rem", padding: "1rem 0rem 0 0", margin: "0"}}>{name}</h1>
                    <h3 style={{textAlign: "center"}}>Owner</h3>
                    
                        <div className={styles.contactImage}>
                            <Image className={styles.profileImage}
                                alt="Black Warrior Cleaning Pros Logo"
                                src="/assets/GioProfile.jpg"
                                quality={100}
                                layout="fill"
                            />
                        </div>
                    
                    
                    <div className={styles.buttonSpacing}>
                        <Link href='assets/GiovanniRamos.vcf' download>
                            <div type="button" className={styles.addButton}>
                            Add Contact
                            </div>
                        </Link>
                    </div>

                    <div className={styles.iconRow}>
                        <div className={styles.logoWrapper}>
                            <a href="https://www.facebook.com/profile.php?id=100087630938358" target="_blank"  rel="noopener noreferrer"> 
                                <Image className={styles.contactLogo}
                                    alt="facebook logo"
                                    src="/assets/fb.png"
                                    quality={100}
                                    layout="fill"
                                />
                            </a>
                        </div>
                
                        <div className={styles.logoWrapper}>
                            <a href="https://instagram.com/blackwarriorcleaningpros?igshid=YWJhMjlhZTc=" target="_blank" rel="noopener noreferrer">
                                <Image className={styles.contactLogo}
                                    alt="Instagram Logo"
                                    src="/assets/instawhite.png"
                                    quality={100}
                                    layout="fill"
                                />
                            </a>
                        </div>
                       
                        <div className={styles.logoWrapper}>
                            <a href="https://www.tiktok.com/@blackwarriorcleaningpros" target="_blank"  rel="noopener noreferrer">
                                <Image className={styles.contactLogo}
                                        alt="TikTok Logo"
                                        src="/assets/ttwhite.png"
                                        quality={100}
                                        layout="fill"
                                    />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )



}
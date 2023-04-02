import styles from '../styles/customFooter.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function CustomFooter () {

    const phone = "(205) 861-3320"
    const email = "BlackWarriorCleaningPros@gmail.com"

    return (
        <footer className={styles.footer}>

        <div className={styles.footerInfo}>
          <Image
            src="/assets/script_logo_white.PNG"
            alt="Black Warrior Cleaning Pros LLC"
            layout="responsive"
            width={300}
            height={75}
          />
          {/* <h4 >Black Warrior Cleaning Pros LLC</h4> */}
          <div className={styles.divider4footer}/>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        

        <div className={styles.footerLogos}>
          <Link href="https://instagram.com/blackwarriorcleaningpros?igshid=YWJhMjlhZTc=" target="_blank"  rel="noopener noreferrer">
            <Image className={styles.footerImage}
              src="/assets/instawhite.png"
              alt="Instagram logo"
              layout='fixed'
              height={30}
              width={30}
            />
          </Link>
          <Link href="https://www.tiktok.com/@blackwarriorcleaningpros" target="_blank" rel="noopener noreferrer">
            <Image className={styles.footerImage}
              src="/assets/ttwhite.png"
              alt="Tik-Tok Logo"
              layout='fixed'
              height={30}
              width={30}
            />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100087630938358" target="_blank"  rel="noopener noreferrer">
            <Image className={styles.footerImage}
              src="/assets/fb.png"
              alt="Facebook logo"
              layout='fixed'
              height={30}
              width={30}
            />
          </Link>
        </div>
        
        
      </footer>

    )
}

export default CustomFooter;
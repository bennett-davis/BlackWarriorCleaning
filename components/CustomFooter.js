import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

function CustomFooter () {

    const phone = "(205)-861-3320"
    const email = "BlackWarriorCleaningPros@gmail.com"

    return (
        <footer className={styles.footer}>

        <div className={styles.footerInfo}>
          <Image
            src="/assets/BWCPwhite.PNG"
            alt="Black Warrior Cleaning Pros LLC"
            layout="fixed"
            width={300}
            height={75}
          />
          {/* <h4 >Black Warrior Cleaning Pros LLC</h4> */}
          <div className={styles.divider4}/>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        

        <div>
        <Link href="https://instagram.com/blackwarriorcleaningpros?igshid=YWJhMjlhZTc=" target="_blank">
          <Image className={styles.footerImage}
            src="/assets/instawhite.png"
            alt="Instagram logo"
            layout='fixed'
            height={30}
            width={30}
          />
        </Link>
        <Link href="https://www.tiktok.com/@blackwarriorcleaningpros" target="_blank">
          <Image className={styles.footerImage}
            src="/assets/ttwhite.png"
            alt="Instagram logo"
            layout='fixed'
            height={30}
            width={30}
          />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100087630938358" target="_blank">
          <Image className={styles.footerImage}
            src="/assets/fb.png"
            alt="Instagram logo"
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
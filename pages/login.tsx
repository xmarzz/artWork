
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function login(){
    return (
        <div>
             <nav className={styles.navbar}>
          <div className={styles.navbar_inside}>
            <Link href='#' className={styles.navbar_home}>Home</Link>
            <Link href='/artwork' className={styles.navbar_artwork}>artwork</Link>
            <Link href='/musical' className={styles.navbar_musical}>musical</Link>     
          </div>  
        </nav>
        </div>
    )
}




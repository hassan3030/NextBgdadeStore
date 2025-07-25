// import Image component from next 
import Image from "next/image";
// import image localy 
import CloudImage from '../../../public/cloud-hosting.png';
// react icon
import { TiTick } from "react-icons/ti";
// import style as module 
import styles from './hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroLeft}>
                <h1 className={styles.title}>Cloud Hosting</h1>
                <p className={styles.desc}>
                    The best web hosting solution for your online success
                </p>
                <div className={styles.services}>
                    <div className={styles.serviceItem}>
                        <TiTick />  Easy To Use Control Panel
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick />  Secure Hosting
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick />  Website Maintenance
                    </div>
                </div>
            </div>
            <div>
                {/*  width={500} height={500} must be in local images  
                     priority to lazy loading default is false
                     make image responsive by default
                    */}
                <Image src={CloudImage} alt='cloud' width={500} height={500}  />
            </div>
        </div>
    )
}

export default Hero
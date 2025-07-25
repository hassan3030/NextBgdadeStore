// "use client" means that the code will be executed only on the client side. is a client-side only import. (react)
// by default, all imports are executed on the server side.
"use client"; 
//----------------
import Link from "next/link"; //----------------
// make style module to use css modules fileNames.module.css
import styles from './header.module.css';
import { useState } from "react";
// ---------------------------- react-icons
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

// NavbarProps interface
interface NavbarProps {
    isAdmin: boolean;
}

// { isAdmin } : NavbarProps is a destructuring of the props object
const Navbar = ({ isAdmin } : NavbarProps) => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/" className={styles.logo}>
                    CLOUD
                    <GrTechnology />
                    HOSTING
                </Link>
                <div className={styles.menu}>
                    {toggle ? (<IoMdClose onClick={() => setToggle(prev => !prev)} />) : (<AiOutlineMenu onClick={() => setToggle(prev => !prev)} />)}
                </div>
            </div>
            <div
                className={styles.navLinksWrapper}
                style={{
                    clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
                    // || "" is a fallback value is important to avoid errors
                }}
            >
                <ul className={styles.navLinks}>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/">Home</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/articles?pageNumber=1">Articles</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/about">About</Link>
                   {isAdmin && (
                     <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">Admin Dashboard</Link>
                   )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
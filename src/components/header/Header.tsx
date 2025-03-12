//link is a component that allows you to navigate between pages in your Next.js application.
import Link from 'next/link'
// make style module to use css modules fileNames.module.css
import styles from "./header.module.css";
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from './LogoutButton';
import Navbar from './Navbar';

const Header = () => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  return (
    <header className={styles.header}>
      <Navbar isAdmin={payload?.isAdmin || false} />
      <div className={styles.right}>
        {payload ? (
          <>
            <Link href="/profile" className='text-blue-800 font-bold md:text-xl capitalize'>
              {payload?.username}
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link className={styles.btn} href="/login">Login</Link>
            <Link className={styles.btn} href="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
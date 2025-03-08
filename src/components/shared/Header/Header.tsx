import Link from 'next/link'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'

import styles from './Header.module.sass'
// import styles from './Header.module.css'
// import { cookies } from 'next/headers'

// import ShoppingCart from '../ShoppingCart' // This is the original import but is replaced by the next line dynamic import
import dynamic from 'next/dynamic';

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), {ssr: false});

export const Header = async () => {
  // const cookiesStore = cookies()
  // const token = cookiesStore.get('accessToken')?.value
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
          <li>
            <Link href="/aboutme">
              Ours
            </Link>
          </li>
          <li>
            <Link href="/chat">
              Chat Bot
            </Link>
          </li>
          <li>
            <Link href="/my-account">
              MyAccount
            </Link>
          </li>
        </ul>
        {/* {token ? (<p>Hola!</p>) : (<Link href="/login">Login</Link>)} */}
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
        <NoSSRShoppingCart />
      </div>
    </header>)
}
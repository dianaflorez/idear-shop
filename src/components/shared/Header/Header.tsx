import Link from 'next/link'
import { ShoppingCart } from '../ShoppingCart'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'

import styles from './Header.module.sass'
// import styles from './Header.module.css'
// import { cookies } from 'next/headers'

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
        </ul>
        {/* {token ? (<p>Hola!</p>) : (<Link href="/login">Login</Link>)} */}
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
        <ShoppingCart />
      </div>
    </header>)
}
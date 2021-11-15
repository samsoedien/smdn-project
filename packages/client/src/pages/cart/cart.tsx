import type { NextPage } from 'next'
import Head from 'next/head'

import styles from './cart.module.scss'

const CartPage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Cart</title>
      <meta name="description" content="Shopping cart" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>Cart</main>
  </div>
)

export default CartPage

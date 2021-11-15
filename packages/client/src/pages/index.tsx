// import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'

import Layout from '../layouts/layout'

import styles from '../styles/Home.module.css'

// The environment variable will be exposed to the browser
console.info('My Application Version', process.env.NEXT_PUBLIC_VERSION)

const HomePage = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    Hello world
  </div>
)

export default HomePage

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

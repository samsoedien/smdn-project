import type { NextPage } from 'next'
import Head from 'next/head'

import SignIn from '../../../app/features/authentication/sign-in'

const SignInPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Log into account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignIn />
      </main>
    </>
  )
}

export default SignInPage

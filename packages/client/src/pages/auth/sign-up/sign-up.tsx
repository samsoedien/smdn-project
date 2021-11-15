import type { NextPage } from 'next'
import Head from 'next/head'

import SignUp from '../../../app/features/authentication/sign-up'

const SignUpPage: NextPage = () => (
  <>
    <Head>
      <title>Sign Up</title>
      <meta name="description" content="Sign into account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <SignUp />
    </main>
  </>
)

export default SignUpPage

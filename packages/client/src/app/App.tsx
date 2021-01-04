import React from 'react'
// import logo from '../assets/img/logo.svg'
import styles from './App.module.scss'

import { IProduct } from '@smdn-project/common'

export interface IAppState {
  products: IProduct[]
}
export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return <div className={styles['App']}>React App</div>
}

App.propTypes = {}

export default App

import React from 'react'
// import logo from '../assets/img/logo.svg'
import styles from './App.module.scss'

import { IProduct } from '@smdn-project/common'
import Products from './features/Products'
export interface IAppState {
  products: IProduct[]
}
export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <div className={styles['App']}>
      <h1>React App</h1>
      <Products />
      <button className="btn btn-primary">Button</button>
    </div>
  )
}

App.propTypes = {}

export default App

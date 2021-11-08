import { Provider } from 'react-redux'
import styles from './app.module.scss'

import { IProduct } from '@smdn-project/common'

import Counter from './features/counter'
import { store } from '../store/store'

export interface IAppState {
  products: IProduct[]
}
export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <Provider store={store}>
      <div className={styles['App']}>
        <h1>React App</h1>
        <Counter />
      </div>
    </Provider>
  )
}

App.propTypes = {}

export default App

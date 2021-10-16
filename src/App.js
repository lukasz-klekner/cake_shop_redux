import { Provider } from 'react-redux'

import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <CakeContainer /> */}
        {/* <HooksCakeContainer />
        <IceCreamContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  )
}

export default App

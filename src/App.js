import { Provider } from 'react-redux'

import store from './redux/cake/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
      </div>
    </Provider>
  )
}

export default App

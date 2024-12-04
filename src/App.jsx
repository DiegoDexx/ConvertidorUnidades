import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import {store}  from './store'
import { Provider } from 'react-redux'
import Home from './pages/home';


function App() {
 

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App

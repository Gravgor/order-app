import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom"
import OrderApp from './components'

const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<OrderApp/>}/>
      </Routes>
    
    </>
  )
}

export default App
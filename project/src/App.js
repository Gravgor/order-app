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
        <Route path='/Order/' element={<OrderApp/>}/>
      </Routes>
    
    </>
  )
}

export default App
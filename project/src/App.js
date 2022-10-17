import React from 'react'
import OrderApp from './components/order-component'



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Order/' element={<OrderApp/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
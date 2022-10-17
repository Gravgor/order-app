import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import OrderApp from './components'

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
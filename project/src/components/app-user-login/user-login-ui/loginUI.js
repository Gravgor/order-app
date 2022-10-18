import React,{useState} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './loginUI.css'

const LoginUI = () => {

    const [userStep, setUserStep] = useState(1)
    const [userName, setUserName] = useState('')
    const [userLocation, setUserLocation] = useState({})


  return (
    <>
    <div className='login-header'>
        <div className='login-header-arrow'>
            <ArrowForwardIcon style={{position: 'relative', top: '5px'}}/>
        </div>
        <p>Skip</p>

    </div>

    </>
  )
}

export default LoginUI
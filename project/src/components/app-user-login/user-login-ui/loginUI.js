import React,{useState} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './loginUI.css'
import { Typography } from '@mui/material';

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
    <div className='login-content'>
        <div className='login-content-header' style={{width: '250px', display: 'flex', flexDirection: 'column', marginTop: '65px', marginLeft: '35px'}}>
            {userStep === 1 &&
            <>
             <Typography variant='p' style={{fontWeight: 'bold', fontSize: '30px'}}>Hello! 🤗</Typography>
             <Typography variant='p' style={{fontWeight: 'bold', fontSize: '30px'}}>Let's see what</Typography>
             <Typography variant='p' style={{fontWeight: 'bold', fontSize: '30px'}}>you are looking</Typography>
             <Typography variant='p' style={{fontWeight: 'bold', fontSize: '30px'}}>for!</Typography>
            </>
            }



        </div>
    </div>

    </>
  )
}

export default LoginUI
import React,{useState} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './loginUI.css'
import { Typography } from '@mui/material';
import { ReactComponent as Cooking} from './images/cooking1.svg';


const LoginUI = () => {

    const [userStep, setUserStep] = useState(1)
    const [userName, setUserName] = useState('')
    const [userLocation, setUserLocation] = useState({})
    const [userEndWelcome, setUserEndWelcome] = useState(false)


  return (
    <>
    <div className='login-header'>
        <div className='login-header-arrow'>
            <ArrowForwardIcon id='icon' style={{position: 'relative', top: '5px'}} onClick={() => setUserStep((prev) => prev+1)}/>
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
            }{userStep === 2 &&
            <><p>podaj login</p></>}
            {userStep === 3 &&
            <><p>lokalizacja</p></>}
            {userStep === 4 &&
            <><p>zatwierdz wszystko</p></>}
        </div>
        <div className='login-image'>
            <Cooking id='cooking'/>
        </div>
    </div>

    </>
  )
}

export default LoginUI
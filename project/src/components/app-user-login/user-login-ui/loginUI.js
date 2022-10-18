import React,{useState} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './loginUI.css'
import { Typography, Box, TextField, Stack, Button } from '@mui/material';
import { ReactComponent as Cooking} from './images/cooking1.svg';
import OrderApp from '../..';




const LoginUI = (props) => {

    const [userStep, setUserStep] = useState(1)
    const [userName, setUserName] = useState('')
    const [userEndWelcome, setUserEndWelcome] = useState(false)

   const handleLogin = () => {
        props.username(userName)
        setUserEndWelcome(true)
   }
  return (
    <>
    <div className='login-header'>
        <div className='login-header-arrow'>
            {userStep < 3 &&
            <ArrowForwardIcon id='icon' style={{position: 'relative', top: '5px'}} onClick={() => setUserStep((prev) => prev+1)}/>}
            {userStep === 3 && <ArrowForwardIcon id='icon2' style={{position: 'relative', top: '5px', cursor: 'not-allowed', color: 'gray'}}/>}
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
            <>
            <Box
            component="form"
            sx={{
                w: '100%',
                h: '100%',
            }}
            noValidate
            autoComplete="off"
            >
            <Typography variant='p' style={{fontWeight: 'bold', fontSize: '30px'}}>But first tell us</Typography>
            <Typography variant='p' style={{fontWeight: 'bold', fontSize: '30px'}}> your name!</Typography>
            <TextField id="outlined-basic" label="Your name" variant="outlined" sx={{
                "& .MuiInputLabel-root": {color: '#000'},
                "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                        borderColor: '#e59500 !important'
                    }
                }
            }}  style={{marginTop: '30px'}} onChange={(e) => setUserName(e.target.value)} value={userName}/>

            </Box>
            
            
            </>}
            {userStep === 3 &&
            <>
            <Typography variant='p' style={{fontWeight: 'bold', fontSize: '30px'}}>{userName} hit button below!</Typography>
            <Stack spacing={1} direction="row">
                <Button variant="contained" onClick={() => handleLogin()} style={{marginLeft:'55px', marginTop: '20px', backgroundColor: '#e59500', color:'#000'}}>Confirm</Button>
            </Stack>
            
            </>}
        </div>
        <div className='login-image'>
            <Cooking id='cooking'/>
        </div>
    </div>

    </>
  )
}

export default LoginUI
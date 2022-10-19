import React,{useState} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './loginUI.css'
import { Typography, Box, TextField, Stack, Button } from '@mui/material';
import { ReactComponent as Cooking} from './images/cooking1.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';




const LoginUI = (props) => {

    const [userStep, setUserStep] = useState(1)
    const [userName, setUserName] = useState('')
    const [userLocation, setUserLocation] = useState('')
    const [userLocationGet, setUserLocationGet] = useState(false)
    const [userEndWelcome, setUserEndWelcome] = useState(false)

   const handleLogin = () => {
        props.username(userName)
        props.location(userLocation)
        setUserEndWelcome(true)
   }


   const getUserLocation = () => {
      if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude
          const long = position.coords.longitude
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyDEOcU0J70KIUHHq0zdjdhZGcQbwGiQZA4`)
          .then(response => response.json())
            .then(data => {
                setUserLocation(data.results[9].address_components[0].long_name)
            })
        })
      }
   }
  return (
    <>
    <div className='login-header'>
        <div className='login-header-arrow'>
            {userStep < 4 &&
            <ArrowForwardIcon id='icon' style={{position: 'relative', top: '5px'}} onClick={() => setUserStep((prev) => prev+1)}/>}
            {userStep === 4 && <ArrowForwardIcon id='icon2' style={{position: 'relative', top: '5px', cursor: 'not-allowed', color: 'gray'}}/>}
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
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100px',
                height: '20px',
                position: 'relative',
                top: '-95px',
                left: '100px'
            }}
            onClick={() => getUserLocation()}
            >
            <Typography id='locate' variant='p' style={{fontWeight: 'bold', fontSize: '12px', position: 'relative', top: '-12px', cursor: 'pointer'}}><LocationOnIcon style={{position: 'relative', top: '5px'}}/>{userLocationGet ? userLocation : 'Locate me'}</Typography>    
            </Box>
            <Box
            sx={{width: '300px', height: '150px', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='p' style={{fontWeight: 'bold', fontSize: '30px'}}>And where are you located?</Typography>
            <Typography variant='p' style={{fontWeight: 'bold', fontSize: '12px'}}>Click above to locate yourself!</Typography>
            <TextField disabled id="outlined-disabled" label="Your location" placeholder='Your location...' variant="outlined" sx={{
                "& .MuiInputLabel-root": {color: '#000'},
                "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                        borderColor: '#e59500 !important'
                    }
                }}}
                style={{position: 'relative', top: '15px',}} value={userLocation} onChange={(e) => setUserLocation(e.target.value)}></TextField>
            </Box>
            </>
            }
            {userStep === 4 &&
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
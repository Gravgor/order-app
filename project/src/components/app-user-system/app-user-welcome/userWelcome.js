import { Button } from '@mui/material'
import React,{useMemo, useState} from 'react'

const UserWelcome = ({userOption}) => {

  const [option, setOption] = useState(0)

  useMemo(() => {
    userOption(option)
  },[option, userOption])


  return (
    <div style={{marginLeft: '5px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '15px'}}>
      <h1>pooperEats</h1>
      <h2 style={{fontSize: '25px'}}>Order food from your favorite restaurants</h2>
      <div className='user-welcome'>
        <div className='user-welcome-option'>
          <h3>Already have an account?</h3>
          <Button variant="contained" onClick={() => setOption(1)} style={{backgroundColor: '#e59500', color:'#000'}}>Login</Button>
        </div>
        <div className='user-welcome-option'>
          <h3>Don't have an account?</h3>
          <Button variant="contained" onClick={() => setOption(2)} style={{backgroundColor: '#e59500', color:'#000'}}>Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export default UserWelcome
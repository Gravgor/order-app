import React,{useState} from 'react'
import {Box, Typography} from '@mui/material'

const Header = ({userName}) => {


    const [dayTime, setDayTime] = useState('')
    const [error, setError] = useState('')

    const newDay = new Date().toISOString()
    const time = new Date(newDay).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    

    const dayTimeArray = [
        {dayTime: 'morning', time: '06:00'},
        {dayTime: 'afternoon', time: '13:00'},
        {dayTime: 'evening', time: '19:00'},
        {dayTime: 'night', time: '22:00'}
    ]

    if(dayTime === ''){   
        const filter = dayTimeArray.filter(element => element.time <= time)
        if(filter){
            const result = filter.slice(-1).pop()
            setDayTime(result.dayTime)
        }
    }
  return (
    <>
    <Box sx={{display: 'flex', width: '220px', position: 'relative', top: '50px', left: '15px'}}>
        <Typography sx={{fontSize: '28px',fontWeight: 'bold'}}>
            Good {dayTime} {userName}! 😎
        </Typography>
    </Box>
    </>
  )
}

export default Header
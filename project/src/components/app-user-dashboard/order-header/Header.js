import React,{useState} from 'react'
import {Box, Typography} from '@mui/material'
import { motion } from 'framer-motion'


const Header = ({userName}) => {



    const [dayTime, setDayTime] = useState('')

    const newDay = new Date().toISOString()
    const time = new Date(newDay).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    

    const dayTimeArray = [
        {dayTime: 'morning', time: '06:00'},
        {dayTime: 'afternoon', time: '13:00'},
        {dayTime: 'evening', time: '19:00'},
        {dayTime: 'night', time: '23:00'}
    ]

    if(dayTime === ''){
       dayTimeArray.filter(item => item.time <= time ? setDayTime(item.dayTime) : 'afternoon')
    }
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{width: "100%"}}
    >
        <Box sx={{display: 'flex', width: '220px', position: 'relative', top: '50px', left: '15px',flexDirection: 'column'}}>
        <Typography sx={{fontSize: '28px',fontWeight: 'bold'}}>
            Good {dayTime} {userName}! 😎
        </Typography>
        <Typography sx={{fontSize: '14px', color: 'gray', position: 'relative', top: '15px'}}>
            Choose your favorite restaurant from our app!
        </Typography>
    </Box>
    </motion.div>
  )
}

export default Header
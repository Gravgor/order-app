import React, {useState, useEffect} from 'react'
import {ThreeDots} from 'react-loader-spinner'


const Loader = () => {



    const [visible, setVisible] = useState(true)


    useEffect(() =>{
        setTimeout(() =>{
            setVisible(false)
        },5000)
    },[])



  return (
    <div>
       <ThreeDots 
height="60" 
width="60" 
radius="9"
color="#e59500" 
ariaLabel="three-dots-loading"
wrapperStyle={{position: 'relative', left: '130px', top: '50px'}}
wrapperClassName=""
visible={visible}
 />

 {visible === false &&
 <p>No items in this category</p>}
    </div>
  )
}

export default Loader
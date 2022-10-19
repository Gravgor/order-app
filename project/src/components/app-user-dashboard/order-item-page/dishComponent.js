import React, { useEffect } from 'react'

import './dish.css'

const DishComponent = ({name,price,description,id, img, shopID, setItem}) => {


  const setup = () => {
    setItem((prev) => [...prev, {name: name,price: price,id:id, shopID:shopID}])
  }

  return (
    <>
    <div className='dish-component' onClick={() => setup()}>
        <div className='right-content'>
            <p>{name}</p>
            <p style={{marginTop: '-15px'}}>{price} eur.</p>
            <p style={{color: 'gray',marginTop: '-15px'}}>{description}</p>
        </div>
        <div className='left-content'>
            <img className='img' alt={name} src={img}/>
        </div>
    </div>



    </>
  )
}

export default DishComponent
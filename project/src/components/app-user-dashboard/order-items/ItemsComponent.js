

import React,{useState} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './css/Item.css'
///TODO: Add button to get into item page

const ItemsComponent = ({id, name,location,premium, img, categoryDisplay,deliveryTime, userChoose}) => {
  const [itemsArray, setItemsArray] = useState([
    {
      id: id,
      name: name,
      location: location,
      premium: premium,
      img: img,
      categoryDisplay: categoryDisplay,
      deliveryTime: deliveryTime,
    }
  ])
  const chooseItems = () => {
    userChoose(itemsArray)
  }
  return (
    <>
    <div className="item" style={{position: 'relative', left: '-15px'}}>
      <div className='item-img'>
        <img src={img} alt="item-img"/>
      </div>
      <div className='item-info'>
        <div className='item-info-name'>
          <p style={{fontSize: '12px', position: 'relative', left: '28px', fontWeight: 'bold'}}>{name}</p>
          <p style={{fontSize: '12px', position: 'relative', left: '28px', top: '-25px', color: 'gray'}}>{categoryDisplay}</p>
        </div>
        <div className='item-info-delivery'>
          <p style={{fontSize: '12px', position: 'relative', left: '-40px',fontWeight: 'bold'}}>{deliveryTime}</p>
        </div>
        <div className='item-select'>
          <button key={id} id='procced' type='button' style={{backgroundColor: '#e59500', border: 'none', borderRadius: '50%', left: '80px', position: 'relative', top: '5px'}} onClick={() => chooseItems()}><ArrowForwardIcon/></button>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default ItemsComponent
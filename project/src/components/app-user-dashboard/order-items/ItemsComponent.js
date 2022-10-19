

import React,{useState} from 'react'
import StarIcon from '@mui/icons-material/Star';
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
    console.log(itemsArray)
    userChoose(itemsArray)

  }
  return (
    <>
    {premium === false &&
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
    }
    {premium === true && 
    <div className='container-premium' style={{textWrap: 'wrap', backgroundColor: '#E8F0F5', borderRadius: '25px', border: '2px solid #e59500', boxShadow: '0px 2px 8px #e59500',height: '190px',width: '150px'}}>
        <div className='content-wrapper' style={{display: 'flex', flexDirection: 'column', marginLeft: '5px'}}>
            <p style={{fontSize: '12px', color: 'gray'}}>Our choose! <StarIcon style={{color: '#e59500', height: '20px', width: '20px', position: 'relative', left: '-2px', top: '6px'}}/></p>
           <h3 className='item-name' style={{position: 'relative', top: '-20px'}}>{name}</h3>
           <p style={{color: 'gray', fontSize: '15px', position: 'relative', top: '-50px'}}>{location}</p>
            <img className='img-responsive' src={img} alt={name} style={{width: 'auto', height: 'auto', position: 'relative', left: '40px', top: '-60px'}}/>
     </div>
    </div>}
    
    </>
  )
}

export default ItemsComponent
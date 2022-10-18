

import React from 'react'
import StarIcon from '@mui/icons-material/Star';



const ItemsComponent = ({id, name,location,premium, img}) => {
  return (
    <>
    {premium === false &&
    <div id={id} className='container' style={{textWrap: 'wrap', backgroundColor: '#E8F0F5', borderRadius: '25px', height: '190px', width: '320px', marginTop: '5px', marginLeft: '3px', border: '2px solid #e59500'}}>
     <div className='content-wrapper' style={{display: 'flex', flexDirection: 'column', marginLeft: '5px', textAlign: 'center'}}>
       <h3 className='item-name'>{name}</h3>
       <p style={{color: 'gray', fontSize: '15px', position: 'relative', top: '-20px'}}>{location}</p>
       <img className='img-responsive' src={img} alt={name} style={{width: 'auto', height: '120px', position: 'relative', left: '5px', top: '-35px'}}/>
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
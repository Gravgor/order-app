import React, {useState, useEffect} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import ItemsComponent from '../order-items/ItemsComponent'



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


export const LoaderSearch = ({searchQuery, searchedItems}) => {
  const [visible, setVisible] = useState(true)
  const [items, setItems] = useState([])
  const [state, setState] = useState(false)




  const stateChange = (value) => {
    if(state === false){
      setItems([value])
      setState(true)
      setTimeout(() => {
        setState(false)
      },10000)
    }

  }


  const loadSearch = ({searchQuery, searchedItems}) => {
    const arrayLength = searchedItems.length;
    for(let i = 0; i < arrayLength; i++){
      if(searchedItems[i].props.name.includes(searchQuery)){
        const searchingItems = searchedItems[i].props
        stateChange(searchingItems)
      }else{
        return;
      }
      if(state === true){
        break;
      }
    }

  }

  loadSearch({searchQuery, searchedItems})



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
  <div>
    {items.map(item => (
      <ItemsComponent id={item.id} name={item.name} location={item.location} premium={item.premium} img={item.img} categoryDisplay={item.categoryDisplay} deliveryTime={item.deliveryTime}/>
    ))
      
    }
  </div>


}
  </div>
)
}

export default Loader
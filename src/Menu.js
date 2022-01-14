import React from 'react';
import Item from './Item'
import items from './data';
import { useState } from 'react';

const Menu = () => {
  const [itemms,setItems ] = useState(items)

  const allCat = ()=>{
    setItems(items)
  }

  const breakFastCat = ()=>{
    let newItems = items.filter((item)=>{
      return item.category == 'breakfast'
    })
    setItems(newItems)
  }

  const lunchCat = ()=>{
    let newItems = items.filter((item)=>{
      return item.category == 'lunch'
    })
    setItems(newItems)
  }

  const shakeCat = ()=>{
    let newItems = items.filter((item)=>{
      return item.category == 'shakes'
    })
    setItems(newItems)
  }

  return ( <React.Fragment>
    <div className="menu">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="under"></div>
      </div>
      <div className="btn-cont">
        <button className="btn" onClick={allCat}>All</button>
        <button className="btn" onClick={breakFastCat}>Breakfast</button>
        <button className="btn" onClick={lunchCat}>Lunch</button>
        <button className="btn" onClick={shakeCat}>Shakes</button>
      </div>
      <div className="orders">
          {
            itemms.map((item)=>{
              return <Item img = {item.img} title={item.title} price={item.price} desc={item.desc}></Item>
            })
          }
      </div>
    </div>
  </React.Fragment> 
  )

  
};

export default Menu;

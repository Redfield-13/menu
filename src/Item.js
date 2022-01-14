import React from 'react'
import items from './data';
function Item(props) {
    return (
        <div className="menu-item">
            <img src={props.img} alt=""/>
            <div className="info">
                <div className="header">
                    <h4 className='name'>{props.title}</h4>
                    <p className="price">${props.price}</p>
                </div>
                <div className="text">{props.desc}</div>
            </div>
        </div>
    )
}

export default Item

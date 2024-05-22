import React from 'react'
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.add_icon} alt="addicon" />
                <p>Add Item</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="order_icon" />
                <p>List Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="order icon" />
                <p>Orders</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
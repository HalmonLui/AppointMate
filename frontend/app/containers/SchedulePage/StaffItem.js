import React, { Component } from 'react'
import HairSalon from './hair_salon.jpg'
import './BusinessPage.css'

function StaffItem(props){
    return (
        <div class="staff-item-container">
            <div class="staff-image-container">
                <img src={props.imageurl} alt="stylist picture"></img>
            </div>
            <div>
              <p class="staff-item-name">{props.name}</p>
              <p class="staff-item-role">{props.role}</p>
            </div>
        </div>
    )
}

export default StaffItem;

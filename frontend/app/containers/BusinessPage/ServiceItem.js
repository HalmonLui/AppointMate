import React, { Component } from 'react'
import HairSalon from './hair_salon.jpg'
import './BusinessPage.css'

function ServiceItem(props){
    return (
        <div class="service-item-container">
            <div class="service-card-text">
                <h4>{props.service}</h4>
                <p class="text-muted">Duration: {props.duration}</p>
            </div>
            <div>
              <p class="service-item-price">${props.price}</p>
            </div>
        </div>
    )
}

export default ServiceItem;

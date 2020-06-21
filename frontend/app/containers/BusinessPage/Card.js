import React, { Component } from 'react'
import HairSalon from './hair_salon.jpg'
import './BusinessPage.css'

function Card(props){
    return (
        <div class="card">
            <div class="card-image-container">
                <img src={props.imageurl} className='card-image'/>
            </div>
            <div class="card-text">
                <h4>{props.title}</h4>
                <p class="text-muted">{props.services}</p>
                <div id="fivestars">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div id="star-container">
                      <span id='star' class="fa fa-star checked"></span>
                      <p class="discover-rating">{props.rating}</p>
                    </div>
                    <span class="discover-num-ratings">{props.numratings} ratings</span>
                </div>
            </div>
        </div>
    )
}

export default Card;

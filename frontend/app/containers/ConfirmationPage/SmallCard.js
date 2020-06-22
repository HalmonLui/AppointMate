import React, { Component } from 'react'
import HairSalon from './hair_salon.jpg'
import SmallFiveStars from './SmallFiveStars'
import '../DiscoverPage/DiscoverPage.css'

function SmallCard(props){
    return (
        <div class="smallcard">
            <div class="smallcard-image-container">
                <img src={props.imageurl} className='smallcard-image'/>
            </div>
            <div class="smallcard-text">
                <h4>{props.title}</h4>
                <p class="text-muted">{props.services}</p>
                <div id="small-fivestars">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div id="small-star-container">
                      <span id='small-star' class="fa fa-star small-checked"></span>
                      <p class="small-discover-rating">{props.rating}</p>
                    </div>
                    <span class="small-discover-num-ratings">{props.numratings} ratings</span>
                </div>
            </div>
        </div>
    )
}

export default SmallCard;

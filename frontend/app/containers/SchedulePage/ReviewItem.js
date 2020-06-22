import React, { Component } from 'react'
import HairSalon from './hair_salon.jpg'
import './BusinessPage.css'
import star from './star.png'

function ReviewItem(props){
    return (
        <div class="review-item-container">
            <div class="review-item-top-container">
                <div class="review-image-container">
                    <img src={props.imageurl} alt="review picture"></img>
                </div>
                <div class="review-item-name-container">
                  <h4>{props.name}</h4>
                  <p class="review-item-date">{props.date}</p>
                </div>
                <img src={star} id="star" alt="star" />
                <p>{props.rating}</p>
            </div>
            <div>
              <p class="review-item-text">{props.review}</p>
            </div>
        </div>
    )
}

export default ReviewItem;

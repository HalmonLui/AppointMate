import React, { Component } from 'react'
import './DiscoverPage.css';

export default class Stars extends Component{
    render(){
        return(
            <div id="fivestars">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div id="star-container">
                  <span id='star' class="fa fa-star checked"></span>
                  <p class="discover-rating">5.0</p>
                </div>
                <span class="discover-num-ratings"> 154 ratings</span>
            </div>
        )
    }
}

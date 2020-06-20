import React, { Component } from 'react'
import './DiscoverPage.css';

export default class Stars extends Component{
    render(){
        return(
            <div id="small-fivestars">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div id="small-star-container">
                  <span id='small-star' class="fa fa-star small-checked"></span>
                  <p class="small-discover-rating">5.0</p>
                </div>
                <span class="small-discover-num-ratings"> 154 ratings</span>
            </div>
        )
    }
}

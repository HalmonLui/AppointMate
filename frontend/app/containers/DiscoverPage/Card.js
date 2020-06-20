import React, { Component } from 'react'
import './DiscoverPage.css';
import HairSalon from './hair_salon.jpg'
import FiveStars from './FiveStars'
import './DiscoverPage.css'

export default class Card extends Component{
    render(){
        return (
            <div class="card">
                <div class="card-image-container">
                    <img src={HairSalon} className='card-image'/>
                </div>
                <div class="card-text">
                    <h4>Beauty Paradise</h4>
                    <p class="text-muted">Haircuts, Balayage etc.</p>
                    <FiveStars/>
                </div>
            </div>
        )
    }
}

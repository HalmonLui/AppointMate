import React, { Component } from 'react'
import './DiscoverPage.css';
import HairSalon from './hair_salon.jpg'
import FiveStars from './FiveStars'
import FourStars from './FourStars'
import './DiscoverPage.css'

export default class SmallCard extends Component{
    render(){
        return (
            <div class="smallcard">
                <div class="smallcard-image-container">
                    <img src={HairSalon} className='smallcard-image'/>
                </div>
                <div class="smallcard-text">
                    <h4>Beauty Paradise</h4>
                    <p class="text-muted">Haircuts, Balayage etc.</p>
                    <FiveStars/>
                </div>
            </div>
        )
    }
}

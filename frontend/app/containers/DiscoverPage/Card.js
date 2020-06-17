import React, { Component } from 'react'
import './DiscoverPage.css';
import HairSalon from './hair_salon.jpg'

export default class DiscoverPage extends Component{
    render(){
        return (
            <div class="row">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                
                <div class="column">
                    <div class="card">
                        <img src={HairSalon} width="100%" height="130"/>
                        <div class="container">
                            <h4><b>Beauty Paradise</b></h4> 
                            <p class="text-muted">Haircuts, Balayage etc.</p> 
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star not-checked"></span>
                            <span class="text-muted"> 154 ratings</span>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src={HairSalon} width="100%" height="130"/>
                        <div class="container">
                            <h4><b>Beauty Paradise</b></h4> 
                            <p class="text-muted">Haircuts, Balayage etc.</p> 
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="text-muted"> 52 ratings</span>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src={HairSalon} width="100%" height="130"/>
                        <div class="container">
                            <h4><b>Beauty Paradise</b></h4> 
                            <p class="text-muted">Haircuts, Balayage etc.</p> 
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="text-muted"> 178 ratings</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
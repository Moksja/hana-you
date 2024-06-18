import React from 'react';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';
import { Card } from './components/PlantCard/PlantCard'; 
import './styles.css';

function App() {
    return (
        <div id='page'>
            <Banner />
            <div id='main'>
                <div id='side'>
                    <Cart />
                </div>
                <Card />
            </div>
        </div>
    );
}

export default App;

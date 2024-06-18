import React from "react";
import { plantList } from "../../datas/plantsList";
import './plantCard.css'

export function Card() {
    return (
        <div id='cardsGrid'>
            {plantList.map((element) => (
                <div className='card' key={element.id}>
                    <div id='topInfos'>
                        <p id='plantName'>{element.name}</p>
                        <p id='plantPrice'>{element.price} €</p>
                    </div>
                    <img className='plantPicture' src={element.src} alt='plantPicture'></img>
                    <div id='careInfos'>
                        <p id='watering'>Arrosage: {element.arrosage}/3</p>
                        <p id='luminosity'>Lumière: {element.lumiere}/3</p>
                    </div>
                    <div id='moreInfos'>
                        <p id='bestseller'>{element.bestseller ? '✨' : ''}</p>
                        <p id='favourite'>{element.favourite ? '💚' : '🤍'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

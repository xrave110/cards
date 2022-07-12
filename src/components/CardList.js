import React from 'react';
import Card from "./Card";
import './CardList.css';
import { v4 as uuidv4 } from 'uuid';

function CardList({ cardData }) {
    //Solutions
    // 1
    const cardsTemplate = cardData.map(({ frontSide, backSide }) => {
        return <Card key={uuidv4()} frontSide={frontSide} backSide={backSide} />
    });
    // 2
    // const cardsTemplate = cardData.map((props) => {
    //   return <Card {...props} />
    // });
    // 3 
    // const cardsTemplate = cardData.map(Card)
    return (
        <div className='card-list-swimline'> {cardsTemplate} </div>
    )
}

export default CardList;
import React from 'react';
import Card from "./Card";
import './CardList.css';

function CardList({ cardData }) {
    //Solutions
    // 1
    const cardsTemplate = cardData.map(({ frontSide, backSide }) => {
        return <Card frontSide={frontSide} backSide={backSide} />
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
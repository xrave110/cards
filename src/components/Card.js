import React from 'react';
import './Card.css';


var Card = ({ frontSide, backSide }) => {
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(previousProps, previousState) {
        console.log('componentDidUpdate');
    }

    // State variables
    const [isFront, changeFace] = React.useState(true);

    // Event handling
    function handleClick(e) {
        // Processing the event
        //e.preventDefault(); // prevent default action of submiting the form
        // Changing state
        changeFace(!isFront)
    }

    const frontClassList = "card__front " + (isFront ? "" : "hidden");
    const backClassList = "card__back " + (isFront ? "hidden" : "")

    return (
        <div className='card' onClick={handleClick}>
            <div className={frontClassList}>{frontSide} </div>
            <div className={backClassList}>{backSide} </div>
        </div>
    )
}

export default Card;
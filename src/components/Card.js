import React, { useEffect, useState } from 'react';
import './Card.css';

//Class based component
class Card2 extends React.Component {
    state = {
        isFront: true
    }
    // Event handling
    handleClick = () => {
        // Processing the event
        //e.preventDefault(); // prevent default action of submiting the form
        // Changing state
        this.setState(function (oldState) {
            return { isFront: !oldState.isFront }
        });

    }
    componentDidMount() {
        console.log('componentDidMount', this.props.frontSide);
    }

    componentDidUpdate(previousProps, previousState) {
        console.log('componentDidUpdate', this.props.frontSide);
    }
    render() {
        // State variables
        const isFront = this.state.isFront;
        const frontClassList = "card__front " + (isFront ? "" : "hidden");
        const backClassList = "card__back " + (isFront ? "hidden" : "")
        const divStyle = this.props.frontSide.length > 30 ? {
            fontSize: '9px'
        } : { fontSize: '13px' }
        return (
            <div className='card' onClick={this.handleClick}>
                <div className={frontClassList} style={divStyle}>{this.props.frontSide} </div>
                <div className={backClassList} style={divStyle}>{this.props.backSide} </div>
            </div >
        )
    }
}

//Function based component
const Card = ({ frontSide, backSide }) => {
    let [isFront, setIsFront] = useState(true);
    // useEffect(() => {
    //     console.log('componentDidMount', frontSide);
    //     console.log('componentDidUpdate', frontSide);
    // });
    // State variables
    const frontClassList = "card__front " + (isFront ? "" : "hidden");
    const backClassList = "card__back " + (isFront ? "hidden" : "")
    const divStyle = frontSide.length > 30 ? {
        fontSize: '9px'
    } : { fontSize: '13px' }
    const handleClick = () => {
        setIsFront(!isFront)
    }
    return (
        <div className='card' onClick={handleClick}>
            <div className={frontClassList} style={divStyle}>{frontSide} </div>
            <div className={backClassList} style={divStyle}>{backSide} </div>
        </div >
    )

}

export default Card;
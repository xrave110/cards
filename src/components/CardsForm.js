import React from 'react';
import './CardsForm.css';

function CardsForm(props) {
    function handleSubmit(e) {
        //e.preventDefault();
    }

    return (
        <from action="#" onSubmit={handleSubmit} className='form-container'>
            <label className='textfield-container'>
                Front side:
                <input type="text" placeholder="Front Side" className='js-front-side textfield-input' />
            </label>
            <label className='textfield-container'>
                Back side:
                <input type="text" placeholder="Back Side" className='js-back-side textfield-input' />
            </label>
            <input type="submit" value="Submit Card" className='submit-button' />
        </from>
    );
}

export default CardsForm;
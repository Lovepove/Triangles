import React from 'react';
import { checkTriangle } from 'js/validation/checkTriangle'

const Calculate = props => {
    const calculateTriangle = event => {
        event.preventDefault();
        const { onCalculateClick } = props;
        const side1 = event.target[0].value;
        const side2 = event.target[1].value;
        const side3 = event.target[2].value;
        const result = checkTriangle(side1, side2, side3);
        onCalculateClick(result);
    }
    return (
        <div>
            <h1 className="row-first__header">Enter the three sides of your triangle</h1>
            <form className="form" onSubmit={calculateTriangle}>
                <input className="form__input" type="text" placeholder="Side 1"></input>
                <input className="form__input" type="text" placeholder="Side 2"></input>
                <input className="form__input" type="text" placeholder="Side 3"></input>
                <button className="form__button" type="submit" value="Calculate">Calculate</button>
            </form>
        </div>
    )
}

export default Calculate;

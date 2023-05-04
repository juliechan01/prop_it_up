import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h2>{props.lName}, {props.fName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.hairColor}</p>
        </div>
    );
}

export default PersonCard;
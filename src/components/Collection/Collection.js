import React from 'react';
import './Collection.css';

const Collection = (props) => {
    // console.log(props);
    const { collection } = props;
    // console.log(collection);
    let total = 0;
    for (const element of collection) {
        total = total + element.salary;
    }
    return (
        <div>
            <h2>Your Collection</h2>
            <h4>Choosen Teachers: {props.collection.length}</h4>
            <h4>Total Cost: {total.toFixed(2)}</h4>
        </div>
    );
};

export default Collection;
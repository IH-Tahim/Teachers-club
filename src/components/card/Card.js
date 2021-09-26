import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props.teacher.email);
    const { name, img, subject, experience, gender, age, salary } = props.teacher;
    return (
        <div className="card">
            <img src={img} alt="teacher's-images" className="card-img" />
            <p className="bold">Name: {name}</p>
            <p>Subject: {subject} </p>
            <p>Experience: {experience}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>Salary: ${salary}</p>
            <button className="btn-primary">Choose</button>
        </div>
    );
};

export default Card;
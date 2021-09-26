import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const Card = (props) => {
    // console.log(props);
    const { name, img, subject, experience, gender, age, salary } = props.teacher;
    const icon = <FontAwesomeIcon icon={faArrowCircleRight} />;
    return (
        <div className="card">
            <img src={img} alt="teacher's-images" className="card-img" />
            <p className="bold">Name: {name}</p>
            <p>Subject: {subject} </p>
            <p>Experience: {experience}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>Salary: ${salary}</p>
            <button className="btn-primary" onClick={() => props.handelButton(props.teacher)}>Choose {icon}</button>
        </div>
    );
};

export default Card;
import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div className="teachers-container">
            <div className="cards-container">

                {
                    teachers.map(teacher => <Card teacher={teacher} key={teacher.id}></Card>)
                }

            </div>
            <div className="collection-container">
                <h2>collecton{teachers.length}</h2>
            </div>
        </div>
    );
};

export default Teachers;
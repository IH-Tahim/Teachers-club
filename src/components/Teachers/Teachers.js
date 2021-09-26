import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Collection from '../Collection/Collection';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])



    const [collection, setCollection] = useState([]);
    const handelButton = (teacher) => {
        // console.log(teacher);
        const newCollection = [...collection, teacher];
        setCollection(newCollection);
    }
    return (
        <div className="teachers-container">
            <div className="cards-container">

                {
                    teachers.map(teacher => <Card
                        teacher={teacher}
                        key={teacher.id}
                        handelButton={handelButton}
                    ></Card>)
                }

            </div>
            <div className="collection-container">
                <Collection collection={collection}></Collection>
            </div>
        </div>
    );
};

export default Teachers;
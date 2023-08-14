import React from 'react';
import { Link } from 'react-router-dom';
import './Entity.css';

const Entity = ({ name, img, level, category }) => {
    return (
        <div className="entity">
            <img src={img} alt={name} />
            <div className="info">
                <Link to={`/wiki/${category}/${name}`}>
                    <h2>{name}</h2>
                </Link>
                <p>Level: {level}</p>
                <h2>Description</h2>
            </div>
        </div>
    );
}

export default Entity;

import React from 'react';
import Rating from '../Rating/Rating';

export default function DriverCard({ name, rating, img, car }) {
    return (
        <div style={{
            backgroundColor: 'blue',
            border: 'solid, blue',
            borderRadius: ' 25px',
            width: '50%',
            lineHeight: '10px',
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '50px',
            paddingBottom: '20px',
            margin: '20px'


        }} >
            <div>
                <img src={img} alt="drivers img" style={{
                    height: '100px', borderRadius: '80%', marginLeft: '100px', marginRight: '20px'

                }} />
            </div>
            <div>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>
                    {car.model} - {car.licensePlate}
                </p>
            </div>
        </div>


    );
}



import React from 'react';

export default function Random({ min, max }) {
    const random = min + Math.round(Math.random() * (max - min));
    return (
        <div style={divStyle}>
            Random value between {min} and {max} =&gt; {random}
        </div>
    );
}

const divStyle = {

    border: 'solid',
    width: '50%',


}
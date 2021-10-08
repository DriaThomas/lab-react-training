import React from 'react';

export default function BoxColor({ r, g, b }) {
    //   const divStyle = ;
    return (
        <div
            style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                height: '100px',
                width: '50%',
            }}
        >
            #{r.toString(16)}
            {g.toString(16)}
            {b.toString(16)}
            <p>RGB({r},{g},{b})</p>
        </div>
    );
}
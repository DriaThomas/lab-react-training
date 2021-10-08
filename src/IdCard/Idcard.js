import React from 'react';


export default function IdCard({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture,
}) {
    return (
        <div style={{
            border: 'solid',
            width: '50%',
            margin: '20px',
            paddingTop: '20px'
        }}>
            <div>

                First name: {firstName}    <br />
                Last name: {lastName}    <br />
                Gender: {gender}    <br />
                Height: {height}    <br />
                Birth: {birth.toDateString()}
                <br />
            </div>
            <div>
                < img src={picture} alt="profile-pic" style={{
                    display: 'flex', flexDirection: 'row', position: 'relative',
                    bottom: '100px'
                }} />
            </div>

        </div >

    );
}




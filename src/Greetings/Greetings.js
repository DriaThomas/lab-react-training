// import React from 'react';

// export default function Greetings({
//    de,
//    en,
//    es,
//    fr
// }) {
//     return (
//         <div>
//             de: {de}
//             en: {en}
//             es: {es}
//             fr: {fr}
//             {/* birth: {birth.toDateString()} */}
//             picture: <img src={picture} alt="profile-pic" />
//         </div>
//     );
// }
import React from 'react';

const getGreet = (lang) => {
    switch (lang) {
        case 'de':
            return 'Hallo';
        case 'fr':
            return 'Bonjour';
        case 'en':
            return 'Hello';
        default:
            return 'Hola';
    }
};

export default function Greetings({ lang, children }) {
    let greet = getGreet(lang);

    return (
        <div style={divStyle}>
            <p>
                {greet} {children}
            </p>
        </div>
    );
}


const divStyle = {

    border: 'solid',
    width: '50%',


}

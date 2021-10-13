import React, { useState } from 'react';

const [values, setValues] = useState({
    email: " ",
    password: "",
    nationality: ""


});
const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value })
}

const handlePassword = (event) => {
    setValues({ ...values, password: event.target.value })
}

const handleNation = (event) => {
    setValues({ ...values, nationality: event.target.value })
}



export default function SignupPage() {
    return (
        <div className="form-container">
            <form className="register-form">
                <input value={values.email}
                    placeholder="Email"
                    name="email"
                    onChange={handleEmail} />
                <span> You typed a valid email</span>
                <input value={values.password}
                    placeholder="Password"
                    name="password"
                    onChange={handlePassword} />
                <span> Password is weak</span>
                <input value={values.nationality}
                    placeholder="Nationality"
                    name="nationality"
                    onChange={handleNation} />

            </form>
        </div>

    );
}

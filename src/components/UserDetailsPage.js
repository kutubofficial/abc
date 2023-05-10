import React, { useState } from 'react';
import './style.css';
const UserDetailsPage = ({ onNext }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');

    const handleNext = () => {
        onNext({ name, email, gender, dob, phone });
    };

    return (
        <div className='main-div'>
            <h2>User Details Page</h2>
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required /><br />
            <label>Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required /><br />
            <label>Gender:</label>
            <select value={gender} onChange={e => setGender(e.target.value)}>
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select><br />
            <label>DOB:</label>
            <input type="date" value={dob} onChange={e => setDob(e.target.value)} required/><br />
            <label>Phone:</label>
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required/><br />
            <button type='submit' onClick={handleNext}>Next</button>
        </div>
    );
};

export default UserDetailsPage;

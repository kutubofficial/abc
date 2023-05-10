import React, { useState } from 'react';

const DateComponentPage = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        let sundays = 0;
        const start = new Date(startDate);
        const end = new Date(endDate);
        while (start <= end) {
            if (start.getDay() === 0) {
                sundays++;
            }
            start.setDate(start.getDate() + 1);
        }

        onSubmit(sundays);
    };

    return (
        <div className='main-div'>
             <h2>Check here..</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="start-date">Start Date:</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                />
                <br />
                <label htmlFor="end-date">End Date:</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DateComponentPage;

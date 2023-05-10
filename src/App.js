import React, { useState } from 'react';
import UserDetailsPage from './components/UserDetailsPage';
import DateComponentPage from './components/DateComponentPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [numSundays, setNumSundays] = useState(null);

  const handleUserSubmit = user => {
    setUser(user);
  };

  const handleDateSubmit = numSundays => {
    setNumSundays(numSundays);
  };

  return (
    <div>
      {!user && <UserDetailsPage onNext={handleUserSubmit} />}
      {user && !numSundays && <DateComponentPage user={user} onSubmit={handleDateSubmit} />}
      {user && numSundays &&
        <div className='details main-div'>
          <p>User Details:</p>
          <ul className='list'>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Gender: {user.gender}</li>
            <li>DOB: {user.dob}</li>
            <li>Phone: {user.phone}</li>
          </ul>
          <p>Number of Sundays: {numSundays}</p>
        </div>
      }
    </div>
  );
};

export default App;

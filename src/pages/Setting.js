import React from 'react';

const Setting = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
        <div className="">
          <div>Account Info</div>
          <div>img</div>
          <div>{storedUser.username}</div>
          <div>delete Account</div>
          <div>College</div>
          <div>Graduate Year</div>
        </div>
    </div>
  );
};

export default Setting;

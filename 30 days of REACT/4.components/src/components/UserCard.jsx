import React from 'react'
import asabenehImage1 from '../images/asabeneh.jpg'

const UserCard = () => {
  return (
    <div className="user-card">
      <img src={asabenehImage1} alt="asabenehimage" />
      <h2>Asabeneh Yetayeh</h2>
    </div>
  );
}

export default UserCard
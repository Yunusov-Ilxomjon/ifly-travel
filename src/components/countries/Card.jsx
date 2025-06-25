import React from 'react'
import './country.css'

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div
        className="card-top"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '45%', // qo‘shimcha: rasm balandligini aniqlash
       borderTopLeftRadius: '15px',
       borderTopRightRadius: '15px',
        }}
      ></div>
      <div className="card-bottom">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className='card-btn'>Batafsil ma'lumot</button>
      </div>
    </div>
  );
};

export default Card

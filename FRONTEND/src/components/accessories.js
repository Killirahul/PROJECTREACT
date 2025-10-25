import React from 'react';
import './accessories.css';
//import { useState } from 'react';
const cardsData = [
  {
    id: 1,
    image: '37.jpg',
    title: 'Mens Ring',
    text: 'men rings have evolved to include a diverse array of styles, ranging from classic and understated to bold and contemporary.',
  },
  {
    id: 2,
    image: '38.jpg',
    title: 'Sun Shades',
    text: 'These stylish and functional eyewear items serve multiple purposes, including eye health, comfort, and fashion.',
  },
  {
    id: 3,
    image: '39.jpg',
    title: 'Earrings',
    text: 'These pieces of jewellery are designed to adorn the ears and come in a wide variety of styles, shapes catering to diverse tastes and occasions.',
  },
  {
    id: 4,
    image: '40.jpg',
    title: 'Mens Chain',
    text: 'These chains, often worn around the neck, come in a variety of styles, materials, make men to look more handsome.',
  },
  {
    id: 5,
    image: '43.jpg',
    title: 'Cap',
    text: 'Primary functions of a cap is to provide shade and protection from the sun.',
  },
  {
    id: 6,
    image: '42.jpg',
    title: 'Womens Belt',
    text: 'womens belt is to provide a flattering fit for pants, skirts, or dresses',
  },
  {
    id: 7,
    image: '44.jpg',
    title: 'Mens Belt',
    text: 'mens belt is to provide a secure and comfortable fit for trousers or jeans.',
  },
  {
    id: 8,
    image: '41.jpg',
    title: 'Womens Chain',
    text: 'Worn with wide range of clothing, from casual wear to formal evening attire',
  },
  {
    id: 9,
    image: '45.jpg',
    title: 'Womens Ring',
    text: 'That adorn the fingers and hold significant value as symbols of love, commitment, or personal style. ',
  },
  // Add more cards as needed
];


function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}


function Accessories() {
  return (
    <div className="App">
        <center>
        <h1>Accessories</h1>
        {/* <p>"Beauty gets enhanced with the best choice of yours"</p> */}
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      </center>
    </div>
  );
}

export default Accessories;
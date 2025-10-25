import React from 'react';
import './womenswear.css';
//import { useState } from 'react';
const cardsData = [
  {
    id: 1,
    image: '13.jpg',
    title: 'Kurti Sets',
    text: 'Casual wear used for offices,for temples ,for casual meetings,for official meetings,for interviews',
  },
  {
    id: 2,
    image: '23.jpg',
    title: 'Organza Saree',
    text: 'Costliest though but looks stylish and perfectly suites you well for the parties,friends time',
  },
  {
    id: 3,
    image: '15.jpg',
    title: 'Formal Wear',
    text: 'Perfectly the office attire ehich makes you look bold,strong ,confident to look enough',
  },
  {
    id: 4,
    image: '16.jpg',
    title: 'Frock',
    text: 'can be preferred to wear for casual friends gatherings and can be used for holiday vacation',
  },
  {
    id: 5,
    image: '17.jpg',
    title: 'Tissue Saree',
    text: 'Grand look which enchances your beauty,a small touch of jewellery gives royal look',
  },
  {
    id: 6,
    image: '18.jpg',
    title: 'Winter Hoodie',
    text: 'Gives you stylish look even in winter protecting you from cool and you can even look smarter',
  },
  {
    id: 7,
    image: '19.jpg',
    title: 'Party Wear Dress',
    text: 'Perfectly goes with the night parties and goes for cocktail party,bachelor party',
  },
  {
    id: 8,
    image: '20.jpg',
    title: 'Indo Western Fusion',
    text: 'Gives you a decent traditional vibe with sense of style,perfect for Indian wedding gatherings',
  },
  {
    id: 9,
    image: '21.jpg',
    title: 'Party Wear Half Saree',
    text: 'Vibe hit with style gives a very beautiful look to you ,preferred in wedding receptions,college functions',
  },
  {
    id: 10,
    image: '22.jpg',
    title: 'Party Wear Frock',
    text: 'Preferred in birthday parties ,college functions which gives elegant look to you',
  },
  {
    id: 11,
    image: '14.jpg',
    title: 'Ruffle Half Saree',
    text: 'Perfect mainly for college students,well suited to go for college parties and marriages',
  },
  {
    id: 12,
    image: '24.jpg',
    title: 'Dress',
    text: 'Casual dresses preferred for journeys,holiday vacations as a simple look and feels lighter',
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


function Womenswear() {
  return (
    <div className="App">
        <center>
        <h1>Womens Wear</h1>
        <p>"Beauty gets enhanced with the best choice of yours"</p>
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      </center>
    </div>
  );
}

export default Womenswear;



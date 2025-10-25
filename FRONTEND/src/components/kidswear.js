import React from 'react';
import './kidswear.css';
//import { useState } from 'react';
const cardsData = [
  {
    id: 1,
    image: '35.jpg',
    title: 'Dress',
    text: 'Used for wedding times and small  family functions',
  },
  {
    id: 2,
    image: '26.jpg',
    title: 'Party wear Frock',
    text: 'Used for parties like birthday parties etc',
  },
  {
    id: 3,
    image: '27.jpg',
    title: 'Kids Coats',
    text: 'Gives nice cute look to the kids when they get dressed with it',
  },
  {
    id: 4,
    image: '28.jpg',
    title: 'Kids suit',
    text: 'perfect when you want to take combos with father and good for photoshoot',
  },
  {
    id: 5,
    image: '29.jpg',
    title: 'Crop Top',
    text: 'These tops are often made from comfortable fabrics and they are suitable for active children. ',
  },
  {
    id: 6,
    image: '30.jpg',
    title: 'Winter Hoodie',
    text: 'They are commonly made from materials such as fleece, cotton blends that provide insulation against the chill.',
  },
  {
    id: 7,
    image: '31.jpg',
    title: 'Party Wear Dress',
    text: 'A kids party dress is a festive and stylish garment  for children to wear on special occasions ',
  },
  {
    id: 8,
    image: '32.jpg',
    title: 'Kids Kurtha',
    text: 'The design of a kids kurta often includes long sleeves providing a comfortable and airy fit for children.',
  },
  {
    id: 9,
    image: '33.jpg',
    title: 'Kids Set',
    text: ' These tiny garments are crafted with a focus on comfort, style,catering to the unique needs of little ones. ',
  },
  {
    id: 10,
    image: '34.jpg',
    title: 'Frock',
    text: 'These dresses are characterized by their loose and flowing fit, featuring a flared or gathered skirt',
  },
  {
    id: 11,
    image: '25.jpg',
    title: 'Summer Frock',
    text: 'Kids summer frocks are lightweight, breezy,stylish dresses designed to keep girls cool and comfortable',
  },
  {
    id: 12,
    image: '36.jpg',
    title: 'Kurtha',
    text: 'The design of a kids kurta often includes long sleeves providing a comfortable and airy fit for children.',
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


function Kidswear() {
  return (
    <div className="App">
        <center>
        <h1>Kids Wear</h1>
        {/* <p>"Beauty gets enhanced with the best choice of yours"</p> */}
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      </center>
    </div>
  );
}

export default Kidswear
//import React, { useState } from 'react';
import './menswear.css';

const cardsData = [
  {
    id: 1,
    image: '1.avif',
    title: 'Denim Jacket',
    text: 'These jackets are well suited and can be paired with denim jeans and simple tshirt for a small time vacation',
  },
  {
    id: 2,
    image: '2.jpg',
    title: 'Winter Hoodie',
    text: 'Gives you stylish look even in winter protecting you from cool climate and you can even look smarter',
  },
  {
    id: 3,
    image: '3.jpg',
    title: 'Suit',
    text: 'Gives an elegant look to you when you choose to wear for your weddings and wedding reception',
  },
  {
    id: 4,
    image: '4.jpg',
    title: 'Kurtha',
    text: 'Gives you traditional look for your festive look and also used in wedding themes like haldi etc..',
  },
  {
    id: 5,
    image: '5.jpg',
    title: 'Denim Short',
    text: 'Feels comfortable and is very cool to look and preferable in holiday vacations and making them perfect for warm weather. ',
  },
  {
    id: 6,
    image: '6.jpg',
    title: 'Tracksuit',
    text: 'It is the uniform for every sports person and also it is official dress and suitable for various seasons. ',
  },
  {
    id: 7,
    image: '7.jpg',
    title: 'Stylish Suit',
    text: 'Comfortable Holiday attires especially when visited to beach side and its obvious to look stylish',
  },
  {
    id: 8,
    image: '8.jpg',
    title: 'Track Pant',
    text: 'It is casual wear always prefered for journeys , also for the nap time and for even night times',
  },
  {
    id: 9,
    image: '9.jpg',
    title: 'Shirt',
    text: 'It is the formal wear used for attending meetings for office wear and for the weddings,interviews',
  },
  {
    id: 10,
    image: '10.jpg',
    title: 'T-Shirt',
    text: 'It is a casual wear which is comfortable and prefereed in whatever way you want as multiple kinds are available',
  },
  {
    id: 11,
    image: '11.jpg',
    title: 'Hoodie',
    text: 'Elevates your everyday style when you pair with the hoodie , based on cloth prefered you canuse anytime you need ',
  },
  {
    id: 12,
    image: '12.jpg',
    title: 'Blazor',
    text: 'Add the blazor just to make a stylish unique look to your formal wears can be used to attend weddings,meetings',
  },
];
// const backgroundStyle = {
//   background: `url('dress.gif') center center fixed`,
//   backgroundSize: 'cover',
//   padding: '20px',
//   borderRadius: '10px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// };
// <div className="wear-background" style={backgroundStyle}></div>

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


function Menswear() {
  return (
    <div className="App">
      <center>
        <h1>Mens Wear</h1>
        <p>"The great thing in fashion is that it always looks forward"</p>
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </center>
    </div>
  );
}

export default Menswear;



// import React from 'react';
// import './menswear.css';
// import { useState } from 'react';
// const cardsData = [
//   {
//     id: 1,
//     image: '1.avif',
//     title: 'Denim Jacket',
//     text: '1999/-',
//   },
//   {
//     id: 2,
//     image: '2.jpg',
//     title: 'Winter Hoodie',
//     text: '999/-',
//   },
//   {
//     id: 3,
//     image: '3.jpg',
//     title: 'Suit',
//     text: '4999/-',
//   },
//   {
//     id: 4,
//     image: '4.jpg',
//     title: 'Kurtha',
//     text: '1299/-',
//   },
//   {
//     id: 5,
//     image: '5.jpg',
//     title: 'Denim Short',
//     text: '899/-',
//   },
//   {
//     id: 6,
//     image: '6.jpg',
//     title: 'Tracksuit',
//     text: '1100/-',
//   },
//   {
//     id: 7,
//     image: '7.jpg',
//     title: 'Stylish Suit',
//     text: '1199/-',
//   },
//   {
//     id: 8,
//     image: '8.jpg',
//     title: 'Track Pant',
//     text: '699/-',
//   },
//   {
//     id: 9,
//     image: '9.jpg',
//     title: 'Shirt',
//     text: '1400/-',
//   },
//   {
//     id: 10,
//     image: '10.jpg',
//     title: 'T-Shirt',
//     text: '599/-',
//   },
//   {
//     id: 11,
//     image: '11.jpg',
//     title: 'Hoodie',
//     text: '999/-',
//   },
//   {
//     id: 12,
//     image: '12.jpg',
//     title: 'Blazor',
//     text: '1500/-',
//   },
//   // Add more cards as needed
// ];


// function Card(props) {
//   const [isAdded, setIsAdded] = useState(false);

//   const handleAddToCart = () => {
//     setIsAdded(true);
//     // You can perform additional actions here, such as sending the data to a cart or performing other logic.
//   };

//   return (
//     <div className="card">
//       <img src={props.image} alt={props.title} />
//       <div className="card-content">
//         <h3>{props.title}</h3>
//         <p>{props.text}</p>
//         {isAdded ? (
//           <button disabled>Added to Cart</button>
//         ) : (
//           <button onClick={handleAddToCart}>Add to Cart</button>
//         )}
//       </div>
//     </div>
//   );
// }

// function Menswear() {
//   return (
//     <div className="App">
//         <center>
//         <h1>Mens Wear</h1>
//         <p>"The great thing in fashion is that it always look forward"</p>
//       {cardsData.map((card) => (
//         <Card key={card.id} {...card} />
//       ))}
//       </center>
//     </div>
//   );
// }

// export default Menswear
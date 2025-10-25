import React from 'react';
import './menu.css';
import { Link } from "react-router-dom";
import './nav.css';
import Navbar from './navbar';
const cardsData = [
  {
    id: 1,
    image: '5.jpg',
    title: 'Mens Wear',
    Link: <Link to='/menswear'className='noUnderline'>Menswear</Link>,
  },
  {
    id: 2,
    image: '14.jpg',
    title: 'Womens Wear',
    Link: <Link to='/womenswear' className='noUnderline'>Womenswear</Link>,
  },
  {
    id: 3,
    image: '25.jpg',
    title: 'Kids Wear',
    Link: <Link to='/kidswear'className='noUnderline'>Kidswear</Link>,
  },
  {
    id: 4,
    image: '45.jpg',
    title: 'Accessories',
    Link: <Link to='/accessories' className='noUnderline'>Accessories</Link>,
  },
  // Add more cards as needed
];


function Card(props) {
  
  return (
   
    <div className="card">
      
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.Link}</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    
    <div className="App">
      <Navbar/>
        <center>
         
        <h1>Categories</h1>
        {/* <p>"Beauty gets enhanced with the best choice of yours"</p> */}
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      </center>
    </div>
    
  );
}

export default Menu;


















// import { Link } from "react-router-dom";
// import './menu.css';
// function Menu(){
//     return (
//         <div>
//             <center>
//             <h1>Categories</h1>
//             <Link to='/menswear'>Menswear</Link><br />
//             <Link to='/womenswear'>Womenswear</Link><br />
//             <Link to='/kidswear'>Kidswear</Link><br />
//             <Link to='/accessories'>Accessories</Link><br />
//             </center>
//         </div>
//     )
// } 
// export default Menu;

// {/* <h1>Categories</h1>
//             <Link to='/menswear'>Menswear</Link><br />
//             <Link to='/womenswear'>Womenswear</Link><br />
//             <Link to='/kidswear'>Kidswear</Link><br />
//             <Link to='/accessories'>Accessories</Link><br /> */}
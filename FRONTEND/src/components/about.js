
import React from 'react';
import './about.css';
import './nav.css';
import Navbar from './navbar';
const cardsData = [
  {
    id: 1,
    image: 'nidhi.jpeg',
    title: 'NIDHI',
    para:'21a91a0551@aec.edu.in'
   
  },
  {
    id: 2,
    image: 'jaanu.jpeg',
    title: 'JAHNAVI',
    para:'21a91a0517@aec.edu.in'
  },
  {
    id: 3,
    image: 'sahithi.jpeg',
    title: 'SAHITHI',
    para:'21a91a0501@aec.edu.in'
  },
  {
    id: 4,
    image: 'likki.jpeg',
    title: 'LIKITHA',
    para:'21a91a0516@aec.edu.in'
  },
  // Add more cards as needed
];


function Card(props) {
  return (
   
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.para}</p>
      </div>
      {/* <div class="about">
  <p>About us page</p>
  <p>Sample text</p>
</div> */}
    </div>
    
  );
}

function About() {
  return (
    
    <div className="App" class="body">
      <Navbar/>
        <center>
        {/* <h1>Categories</h1> */}
        <div class="about">
  {/* <h1>About us page</h1> */}
  <img src="/aboutpic4.jpg" style={{width:"1500px",height:"200px"}}/>
  <h1>ELEGANZO</h1>
  <p className='intro'>Our website is all about knowing the diffrent fashion available on the trend and letting know about varieties of styles of clothings or dresses available for us for those who are having low level of knowledge on fashion</p>
  <i class="id">"A great dress can make you remember what is beautiful about life." - Rachel Roy</i><br /><br />
  <i class="id">"Fashion is about dressing according to what’s fashionable. Style is more about being yourself." - Oscar de la Renta</i>
  <h2>Our Team Members</h2>
</div>
        {/* <p>"Beauty gets enhanced with the best choice of yours"</p> */}
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      </center>
    </div>
  );
}

export default About;


















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
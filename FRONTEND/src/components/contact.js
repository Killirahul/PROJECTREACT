// import {useState} from "react";
// import axios from "axios";
// const Contact=()=>{
//     const [formdata,setFormdata]=useState({
//         'name':'',
//         'number':'',
//         'text':''
//     })
    
//     const handlesubmit=(e)=>{
//         e.preventDefault();
//         console.log(formdata)
//         axios.post('http://localhost:5000/adduser',{formdata}).then((res)=>alert(res.data.msg))
//     }
  
//     return(
//         <>
//         <div
//        style={{
//          position: 'relative',
//         width: '100%',
//         height: '100%',
//        }}>
//         {/* Background image */}
//        <img
//          src="formpic.jpg"
//         alt="Background"
//          style={{
//           width: '100%',
//            height: '100%',
//            objectFit: 'cover', // You can adjust this to control how the image fits the container
//          }}/>

//          {/* Text on the image */}
//        <div
//          style={{
//           position: 'absolute',
//           top: '50%', // You can adjust the positioning as needed
//           left: '50%',
//            transform: 'translate(-50%, -50%)', // Center the text
//            color: 'white', // Text color
//            backgroundColor: '#427D9D', // Background color with opacity
//           padding: '10px', // Adjust the padding as needed
          
          
//         }}
//        >
//             <center>
//             <h1><i>Ask your Queries</i></h1>
//             <form onSubmit={handlesubmit}>
//             <label> <i>Enter name</i></label>
//             <br></br>
//                 <input type='text' name='name' onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
//                 <br/>
//                 <br/>
//                 <label> <i>Enter Mobile number</i></label>
//                 <br></br>
//                 <input type='number' name="number" onChange={(e)=>setFormdata({...formdata,number:e.target.value})}/>
//                 <br/> <br/>
//                 <label> <i>Comment your thoughts here...</i></label>
//                 <br></br>
//                 <input type='text' name="text" onChange={(e)=>setFormdata({...formdata,text:e.target.value})} style={{width:"400px",height:"80px"}}/>
//                 <br/> <br/>
                
//                 <button type="submit" className="btn-submit" style={{ backgroundColor: '#FFEAEA', color: 'black' ,width:"100px",height:"30px"}} // Adding inline styles
//          disabled={false} >
//          Submit
//        </button>
       
//             </form>
//             </center>
//             </div>
//             </div>
//         </>
//     )
// }
// export default Contact;


import React, { useState } from "react";
import axios from "axios";
import './nav.css';
import Navbar from './navbar';
const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    number: "",
    email: "",  // Added email field
    text: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios.post("http://localhost:5000/adduser", { formdata }).then((res) => alert(res.data.msg));
  };

  return (
    <>
    <Navbar/>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Background image */}
        {/* <img
          //src="formpic.jpg"
          src="shopo.gif"
          
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // You can adjust this to control how the image fits the container
          }}
        /> */}
  <img src="/shopo.gif" style={{width:"550px",height:"800px"}} />
        {/* Text on the image */}
        <div
          style={{
            position: "absolute",
            top: "50%", // You can adjust the positioning as needed
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the text
            color: "white", // Text color
            backgroundColor: "#427D9D", // Background color with opacity
            padding: "10px", // Adjust the padding as needed
          }}
        >
          <center>
            <h1>
              <i>Ask your Queries</i>
            </h1>
            <form onSubmit={handlesubmit}>
              <label>
                <i>Enter name</i>
              </label>
              <br></br>
              <input type="text" name="name" onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} />
              <br />
              <br />
              <label>
                <i>Enter Mobile number</i>
              </label>
              <br></br>
              <input type="number" name="number" onChange={(e) => setFormdata({ ...formdata, number: e.target.value })} />
              <br />
              <br />
              <label>
                <i>Enter Email</i>
              </label>
              <br></br>
              <input type="email" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
              <br />
              <br />
              <label>
                <i>Comment your thoughts here...</i>
              </label>
              <br></br>
              <input type="text" name="text" onChange={(e) => setFormdata({ ...formdata, text: e.target.value })} style={{ width: "400px", height: "80px" }} />
              <br />
              <br />

              <button
                type="submit"
                className="btn-submit"
                style={{ backgroundColor: "#FFEAEA", color: "black", width: "100px", height: "30px" }} // Adding inline styles
                disabled={false}
              >
                Submit
              </button>
            </form>
          </center>
        </div>
        <img src="/shopo.gif" style={{width:"550px",height:"800px",float:"right"}} />
      </div>
    </>
  );
};

export default Contact;

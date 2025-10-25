import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer"
import bodyParser from "body-parser";
import cors from "cors";
import user from "./models/user";
import multer from "multer";



const app=express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://JahnaviK:Jaanu143@cluster0.ygmqxpu.mongodb.net/DriveReady?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>
console.log("Connected to database&listening to local host 5000"))
.catch((err) => console.log(err));


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })




app.post('/adduser', async (req, res, next) => {
  try {
    const { name, number, email, text } = req.body.formdata;

    // Assuming 'user' is your mongoose model
    const users = new user({
      name,
      number,
      email,
      text
    });

    // Save the user data to the database
    await users.save();

    // Send email to the user's provided email address
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'eleganzo.fashionlook@gmail.com',
        pass: 'cedj wlrf cpyz xydx'
      }
    });

    const mailOptions = {
      from: 'eleganzo.fashionlook@gmail.com',
      to: email, 
      subject: 'Thank You for Your Form Submission',
      text: `Dear ${name},\n\nYour form submission warms our hearts 💖 !!! Thank you for choosing ELEGANZO. We look forward to connecting with you soon.\n\nBest regards,\nELEGANZO🐧`
    };
    
    

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        return res.send({ msg: 'Thanks for visiting our website!!!', res: users });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: 'Internal Server Error' });
  }
});

// Other necessary code for setting up the server and connecting to the database
// ...

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

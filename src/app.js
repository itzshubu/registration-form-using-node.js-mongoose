const express = require('express')
const Todooo = require("./models/registration-model.js")                                           

const app = express()
const port = 3009

require("./db/conn.js")
app.use(express.static("public"))
app.set('view engine', 'ejs');

// app.use(express.json());
// The line app.use(express.json()); in an Express application is used to parse incoming requests with JSON payloads. This middleware function is necessary for processing data sent in the body of an HTTP request in JSON format. When you include this middleware, Express automatically parses the JSON data and makes it available on the req.body object of your route handlers.
// there is no need of this line

app.use(express.urlencoded({extended:false}));
// this used to get the form data automaticaly throw the name attribute ex:: req.body.email , req.body.pasword etc.



app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', async(req, res) => {
  try{
    console.log(req.body)
     let a = req.body.password;
     console.log(a)
     let b = req.body.password2;
       if(a===b){
         const todoo = new Todooo({name:req.body.name ,email:req.body.email ,password:req.body.password,gender:req.body.gender
         })
         const registered = await todoo.save();
         console.log(registered)
         res.status(200).render('index')
       }
       else{
        res.send("pasword are note same")
       }
  }
  catch(err){
           res.status(400).send(err);
  }      
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
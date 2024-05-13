const express = require('express')
const Todooo = require("./models/register.js")                                           

const app = express()
const port = 3000

require("./db/conn.js")
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

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
     let a = req.body.password;
     let b = req.body.password2;
       if(a===b){
         const todoo = new Todooo({name:req.body.name ,email:req.body.email ,password:req.body.password,gender:req.body.gender
         })
         const registered = await todoo.save();
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
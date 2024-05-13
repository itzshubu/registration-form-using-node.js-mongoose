const conn = require("mongoose")
conn.connect("mongodb://localhost:27017/userdata")
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err))
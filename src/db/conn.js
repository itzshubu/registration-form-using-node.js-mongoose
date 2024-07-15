const conn = require("mongoose")
conn.connect("mongodb://localhost:27017/userdata")
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err))
const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true ,unique : true},
  password: { type: String, required: true },
  gender: { type: String, required: true },
});
const collection = mongoose.model("collection", TodoSchema);
module.exports = collection;
 
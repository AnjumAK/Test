const mongoose = require(‘mongoose’);
const userSchema = mongoose.Schema({
   
     name: { type: String, unique: true,required: true },
     email: { type: String, required: true },
     body: { type: String, required: true }, 
  
})

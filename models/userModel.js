const mongoose = require('mongoose');

//Schema Design 
const userSchema = new mongoose.Schema({
 name: {
    type:String ,
    required:[true , 'Name is Required']
 } , 
 email: {
    type : String ,
    required:[true , 'Email is Required And should be Unique']
 },
password:{
   
    type: String ,
    required : [true , 'Password is Required']
},
},{timestamps:true})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;
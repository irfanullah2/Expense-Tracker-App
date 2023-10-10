const mongoose = require('mongoose');
const colors = require('colors');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB on ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`.bgRed);
    }
}
// mongoose.connect("mongodb://127.0.0.1:27017/expenseapp")
// .then(()=>{
//     console.log(" DB Connection Successfull ");
// })
// .catch(()=>{
//     console.log("No Connection");
// }); 
 
 module.exports = connectdb;

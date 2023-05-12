const mongoose = require('mongoose');
const mongooseURI = "mongodb+srv://paswanatul07:Atul0786@cluster0.cvfnvay.mongodb.net/techycricketinotebook?retryWrites=true&w=majority"
// const mongooseURI= "mongodb+srv://paswanatul07:Atul@0786@cluster0.cvfnvay.mongodb.net/?retryWrites=true&w=majority"
// const mongooseURI= "mongodb+srv://paswanatul07:Atul@0786@cluster0.cvfnvay.mongodb.net/AtulPaswan?retryWrites=true&w=majority"
// const mongooseURI = "mongodb://localhost:27017/inotebook"

const connectTomongo = ()=>{
    mongoose.connect(mongooseURI,()=>{
        console.log("Connected to mongo succesfull");
    })
    
};
module.exports = connectTomongo;

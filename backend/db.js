const mongoose = require('mongoose');
const mongooseURI = "mongodb+srv://<username>:<password>@cluster0.cvfnvay.mongodb.net/techycricketinotebook?retryWrites=true&w=majority"

const connectTomongo = ()=>{
    mongoose.connect(mongooseURI,()=>{
        console.log("Connected to mongo succesfull");
    })
    
};
module.exports = connectTomongo;

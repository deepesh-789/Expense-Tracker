const mongoose = require('mongoose');

const connectDB = ()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/deepesh").then(() => {
            console.log("DB is Connected");
        }).catch((err) => {
            console.log(err)
        });
    } catch (error) {
        console.log(error);        
    }
}

module.exports = {connectDB};


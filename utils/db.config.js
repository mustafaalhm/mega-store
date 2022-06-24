const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URI = process.env.MONGODB_URI;

mongoose.connect(URI,{
    useNewUrlParser :true,
    useUnifiedTopology:true,
    
    });


mongoose.connection.once('open',()=>{
    console.log('connected to mongoo db')
})
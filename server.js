const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoDBConnection = require('./config/db.js');
const productRouts = require('./routes/productRouts.js')

//dotenv connection....
dotenv.config();

//MongoDB connection.....
mongoDBConnection();

//Middlewares....
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products',productRouts);


//Port....
const PORT = process.env.PORT||4000;

//listen....
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))




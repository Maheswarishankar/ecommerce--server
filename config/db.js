const mongoose = require('mongoose');
const mongoDBConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL, {
        });
        console.log('MongoDB Connected');

    } catch (error) {
        console.log(error.message);

    }
};
module.exports = mongoDBConnection;

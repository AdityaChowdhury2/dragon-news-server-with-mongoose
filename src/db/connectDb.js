require('dotenv').config();
const mongoose = require('mongoose');

const getConnectionURI = () => {
    let connectionURI;
    if (process.env.NODE_ENV === 'production') {
        connectionURI = process.env.PROD_DB_URI
    }
    else {
        connectionURI = process.env.LOCAL_DB_URI
    }
    return connectionURI;
}

const connectDb = async () => {
    try {
        const uri = getConnectionURI();
        await mongoose.connect(uri, {
            dbName: process.env.DB_NAME
        });
        console.log("📍📍Db connection established");
    } catch (error) {
        console.log("mongo connection error: " + error);
    }
}
module.exports = connectDb;
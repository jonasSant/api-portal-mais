//const mongoose = require('mongoose')
import mongoose from 'mongoose'

const connectDatabase = () => {
    console.log("Waiting the connection with the Database")

    mongoose.connect( process.env.MONGODB_URI)
}


export default connectDatabase
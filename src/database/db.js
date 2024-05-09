const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log("Waiting the connection with the Database")

    mongoose.connect(
        "mongodb+srv://root:root@cluster0.sosdq7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"//,
        //with two parameters, the uri and the options
        //{useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log("MongoDb Atlas connected")).catch((error) => console.log(error))
}

module.exports = connectDatabase
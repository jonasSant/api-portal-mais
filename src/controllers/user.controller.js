
//const userService = require("../services/user.service")
//const { ObjectId } = require("mongodb")
import userService from "../services/user.service.js"

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body //instead to use just "user", i'm calling all properties of the object, one by one

        if (!name || !username || !email || !password || !avatar || !background) { //validating all fields
            res.status(400).json({ "message": "Submit all fields for registration" })
        }

        const user = await userService.createService(req.body)

        if (!user) {
            return res.status(400).send({ message: "Error creating User" })
        }

        res.status(201).send({
            message: " User created sucessfully",
            user: {
                id: user._id,
                name, //key and value got the same name so i just pass the values directly ES6
                username,
                email,
                avatar,
                background
            },
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}


const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService() // remember to always use await when search for information or validation in another module
        if (users.length === 0) {
            return res.status(400).send({ message: "Theres are no registered users" })
        }
        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findById = async (req, res) => {
    try {
        const user = req.user
        res.send(user)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body

        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).json({ "message": "Submit at least one field for update" })
        }

        const { id, user } = req

        await userService.updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        )

        res.send({ message: "User successfully updated!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

//module.exports = { create, findAll, findById, update }

export default  {create, findAll, findById, update} 
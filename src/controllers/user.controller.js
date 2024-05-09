const userService = require("../services/user.service")
const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body //instead to use just "user", i'm calling all properties of the object, one by one

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).json({ "message": "Submit all fields for registration" })
    }

    const user = await userService.create(req.body)

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
}

module.exports = { create }
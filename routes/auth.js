const router = require("express").Router();
const User = require("../models/model.User");
const {
	registerValidation,
	loginValidation,
} = require("../middleware/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
	const { username, password, email } = req.body;
	const { error } = registerValidation(req.body);
	if (registerValidation(req.body).error) {
		return res
			.status(400)
			.send(error.details[0].message);
	}
	if (!username || !password || !email) {
		res.status(400).json({
			error: "Please provide a username, password and Email",
		});
	} else {
		const user = new User({
			username,
			password,
			email,
		});
		try {
			//check if username already exists
			const userExists = await User.findOne({
				username,
			});
			if (userExists) {
				return res.status(400).json({
					error: "Username already exists",
				});
			}
			//check if email already exists
			const emailExists = await User.findOne({
				email,
			});
			if (emailExists) {
				return res.status(400).json({
					error: "Email already exists",
				});
			}

			//hash the passwords
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(
				password,
				salt
			);
			await user.save();
			res.status(200).json({
				message: "User created successfully",
			});
			res.send({ user: user._id });
		} catch (err) {
			res.json({ message: err });
		}
	}
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	const { error } = loginValidation(req.body);
	if (loginValidation(req.body).error) {
		return res
			.status(400)
			.send(error.details[0].message);
	}

	if (!username || !password) {
		res.status(400).json({
			error: "Please provide a username and password",
		});
	} else {
		try {
			const user = await User.findOne({
				username,
			});
			if (!user) {
				return res.status(400).json({
					error: "User does not exist",
				});
			}
			const validPass = await bcrypt.compare(
				password,
				user.password
			);
			if (!validPass) {
				return res.status(400).json({
					error: "Invalid password",
				});
			}

			//create and assign a token
			const token = jwt.sign(
				{ _id: user._id },
				process.env.TOKEN_SECRET
			);
			res.header("auth-token", token).send(token);
		} catch (err) {
			res.json({ message: err });
		}
	}
});

module.exports = router;

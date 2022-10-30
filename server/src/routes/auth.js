const express = require('express');
const router = express.Router();
const User = require('../app/Models/User');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    //validation
    if (!username || !password)
        return res.status(400).json({
            success: false,
            message: 'Missing username and/or password',
        });
    try {
        const user = await User.findOne({ username });
        if (user) return res.status(400).json({ success: false, message: 'Username already exist' });
        //all good
        const hashedPassword = await argon2.hash(password);
        const newUser = new User({
            username,
            password: hashedPassword,
        });
        await newUser.save();
        // Return token
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ success: true, message: 'User created successfully', accessToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    //simpler validation
    if (!username || !password)
        return res.status(400).json({
            success: false,
            message: 'Missing username and/or password',
        });
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ success: false, message: 'Incorrect username or password' });
        // username found
        const passwordValid = await argon2.verify(user.password, password);
        if (!passwordValid) return res.status(400).json({ success: false, message: 'Incorrect username or password' });
        //All good
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ success: true, message: 'Login successfully', accessToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
module.exports = router;

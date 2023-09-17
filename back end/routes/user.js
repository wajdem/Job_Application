// Routes
const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/userControllers');


// Sign Up Route (Exclude from authentication)
router.post('/signup', signupUser);

// Login Route (Exclude from authentication)
router.post('/login', loginUser);

// Other routes that require authentication...


module.exports = router;

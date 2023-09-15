const express = require('express'); 

const { signupUser, loginUser, activeUser } = require('../controllers/userControllers');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.patch('/active/:userId', activeUser);

module.exports = router; 

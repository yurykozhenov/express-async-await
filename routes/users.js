const express = require('express');

const User = require('../models/user');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.find();

  if (users.length === 0) {
    const newUser = new User({ name: 'First User' });

    await newUser.save();
  }

  res.render('users', { title: 'Users', users });
});

module.exports = router;

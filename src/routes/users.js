// import node modules
const { Router } = require('express');
const fetch = require('node-fetch');

// initializations
const router = Router();

// routes
router.get('/', async (req, res) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    res.json(users);
})

// export module
module.exports = router;
// imports node modules
const { Router } = require('express');

// initializations
const router = Router();

// routes
router.get('/', (req, res) => {
    res.json({'title':'Hello world!'})
});

// export module
module.exports = router;
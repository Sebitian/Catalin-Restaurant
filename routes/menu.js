const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/menu', (req,res,next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'menu.html'));
});

module.exports = router;


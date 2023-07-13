const express = require('express');
const router = express.Router()

const skillsCtrl = require('../controller/skills')

router.get('/', skillsCtrl.index);

// GET /todos/new 

router.get('/new', skillsCtrl.new);

router.get('/:id',skillsCtrl.show);

router.post('/', skillsCtrl.create);
// new route below
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
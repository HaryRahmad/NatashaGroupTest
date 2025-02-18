const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router();

router.get('/', Controller.getMahasiswa);
router.post('/', Controller.createMahasiswa);
router.put('/:id', Controller.updateMahasiswa);
router.delete('/:id', Controller.deleteMahasiswa);

module.exports = router;
const express = require('express');
const router = express.Router();
const tasksController = require("../controller/task.js");


router.get('/', tasksController.getTask);
router.post('/', tasksController.createTask);
router.get('/:id', tasksController.getTaskId);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;

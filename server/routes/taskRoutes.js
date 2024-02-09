
const express = require('express');
const router = express.Router();

// Importer le contrôleur des tâches
const taskController = require('../controllers/taskController');

// Routes pour les tâches
router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:taskId', taskController.getTaskById);
router.put('/:taskId', taskController.updateTask);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;

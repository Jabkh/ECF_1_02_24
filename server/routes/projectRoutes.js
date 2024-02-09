
const express = require('express');
const router = express.Router();

// Importer le contrôleur des projets
const projectController = require('../controllers/projectController');

// Routes pour les projets
router.post('/', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:projectId', projectController.getProjectById);
router.put('/:projectId', projectController.updateProject);
router.delete('/:projectId', projectController.deleteProject);

module.exports = router;

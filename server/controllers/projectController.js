// projectController.js
const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    try {
      const { projectName, projectDescription } = req.body;
      const newProject = await Project.create({
        projectName,
        projectDescription,
      });
      res.status(201).json(newProject);
    } catch (error) {
      console.error('Erreur lors de la création du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la création du projet' });
    }
  };
  
  exports.getAllProjects = async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      console.error('Erreur lors de la récupération des projets :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des projets' });
    }
  };
  

  exports.getProjectById = async (req, res) => {
    try {
      const { projectId } = req.params;
      const project = await Project.findById(projectId).populate('tasks');
      if (!project) {
        return res.status(404).json({ message: 'Projet non trouvé' });
      }
      res.status(200).json(project);
    } catch (error) {
      console.error('Erreur lors de la récupération du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération du projet' });
    }
  };
  

exports.updateProject = async (req, res) => {
    try {
      const { projectId } = req.params;
      const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, { new: true });
      if (!updatedProject) {
        return res.status(404).json({ message: 'Projet non trouvé' });
      }
      res.status(200).json(updatedProject);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du projet' });
    }
  };
  
  exports.deleteProject = async (req, res) => {
    try {
      const { projectId } = req.params;
      const deletedProject = await Project.findByIdAndDelete(projectId);
      if (!deletedProject) {
        return res.status(404).json({ message: 'Projet non trouvé' });
      }
      res.status(204).end();
    } catch (error) {
      console.error('Erreur lors de la suppression du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la suppression du projet' });
    }
  };
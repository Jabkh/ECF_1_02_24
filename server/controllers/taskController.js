const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
      const { projectId } = req.params;
      const { taskName, taskDescription } = req.body;
      const newTask = await Task.create({
        taskName,
        taskDescription,
        projectId,
      });
      res.status(201).json(newTask);
    } catch (error) {
      console.error('Erreur lors de la création de la tâche :', error);
      res.status(500).json({ message: 'Erreur lors de la création de la tâche' });
    }
  };
  
  exports.getAllTasks = async (req, res) => {
    try {
      const { projectId } = req.params;
      const tasks = await Task.find({ projectId });
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des tâches' });
    }
  };

  exports.getTaskById = async (req, res) => {
    try {
      const { projectId, taskId } = req.params;
      const task = await Task.findOne({ _id: taskId, projectId });
      if (!task) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
      }
      res.status(200).json(task);
    } catch (error) {
      console.error('Erreur lors de la récupération de la tâche :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération de la tâche' });
    }
  };
  
  exports.updateTask = async (req, res) => {
    try {
      const { projectId, taskId } = req.params;
      const updatedTask = await Task.findOneAndUpdate({ _id: taskId, projectId }, req.body, { new: true });
      if (!updatedTask) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la tâche :', error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la tâche' });
    }
  };
  
  exports.deleteTask = async (req, res) => {
    try {
      const { projectId, taskId } = req.params;
      const deletedTask = await Task.findOneAndDelete({ _id: taskId, projectId });
      if (!deletedTask) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
      }
      res.status(204).end();
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
      res.status(500).json({ message: 'Erreur lors de la suppression de la tâche' });
    }
  };

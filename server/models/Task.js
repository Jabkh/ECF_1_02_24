const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
    type: String,
    required: true
  },
  taskDescription: {
    type: String,
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'projects',
    required: false //remettre à true pour gérer les relations
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

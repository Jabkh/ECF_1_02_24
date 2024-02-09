const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  projectDone: {
    type: Boolean,
    default: false
  },
  projectStartedAt: {
    type: Date,
    default: Date.now
  },
  appUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // remettre à true pour gérer les relations
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

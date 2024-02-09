// Importez les modules nécessaires
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { registerUser,loginUser } = require('../controllers/authController');

// Créez une instance du routeur Express
const router = express.Router();

// Route pour l'inscription (signup)
router.post('/register', registerUser);

// Route pour la connexion (login)
router.post('/login', loginUser);

// Route protégée nécessitant un token JWT
router.get('/profile', (req, res) => {
  // Obtenez le token depuis l'en-tête de la requête
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  // Vérifiez le token
  jwt.verify(token, /*'clé_secrète',*/ (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token invalide' });
    }

    // L'utilisateur est authentifié, vous pouvez renvoyer ses informations ici
    res.json({ username: decoded.username });
  });
});

// Exportez le routeur pour qu'il puisse être utilisé dans votre application Express
module.exports = router;

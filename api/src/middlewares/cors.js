const { Router } = require('express');
const router = Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Esto permite solicitudes desde cualquier origen
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  
  // Importante: Llama a next() para continuar con el procesamiento de la solicitud
  next();
});

module.exports = router;

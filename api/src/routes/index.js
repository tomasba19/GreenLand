const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categoryRouter = require('./categories.js')
const productRouter = require('./products.js')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/categories', categoryRouter)

router.use('/products', productRouter)

module.exports = router

const express = require('express')
const router = express.Router()
const { registerAdmin, loginAdmin, LinkStart } = require('../controllers/adminController')

const { protect } = require('../middleware/authMiddleware')


router.post('/', registerAdmin)
router.post('/admin', loginAdmin)
router.get('/start', protect, LinkStart)






module.exports = router
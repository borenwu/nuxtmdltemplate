import { Router } from 'express'

import users from './users'
import blogs from './blogs'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(blogs)

export default router

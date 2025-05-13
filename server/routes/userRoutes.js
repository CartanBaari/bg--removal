import express from 'express'
import { clerkwebhooks } from '../controllers/userController.js'
const userRoute=express.Router()
userRoute.post('/webhooks',clerkwebhooks)

export default userRoute
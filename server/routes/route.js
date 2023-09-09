import express from 'express'
const router = express.Router();

import {insertData,signIn,viewProfile,updateProfile,checkPassword} from '../Controllers/controllers.js'

router.post("/send",insertData);
router.post("/signin",signIn)
router.get("/profile",viewProfile)
router.put("/update",updateProfile)
router.post("/checkpassword",checkPassword)



export default router;
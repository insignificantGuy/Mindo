import express from 'express';
const router = express.Router();
import { getUser, registerUser} from '../controllers/userController.js';

router.route("/getUser").get(getUser);
router.post("/addUser",registerUser);

export default router
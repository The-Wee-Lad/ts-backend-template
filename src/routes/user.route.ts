import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();
import {
  register,
  login,
  logout,
  deleteUser,
  update,
  getCurrentUser
} from '../controllers/user.controller.js';

router.route('/').post(register).put(verifyToken, update).get(verifyToken, getCurrentUser);
router.route('/login').post(login);
router.route('/logout').post(verifyToken, logout);
router.route('/delete').delete(verifyToken, deleteUser);

export { router as userRouter };


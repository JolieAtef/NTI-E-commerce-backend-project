import { Router } from "express";
import { login, protectRoutes, signup } from "../controllers/auth";

const authRoute: Router = Router();

authRoute.route('/signup').post(signup);
authRoute.route('/login').post(login);

// authRoute.route('/:id')
//   .get(getUserValidator, getUser)
//   .put(uploadUserImage, resizeUserImage, updateUserValidator, updateUser)
//   .delete(deleteUserValidator, deleteUser);

export default authRoute;
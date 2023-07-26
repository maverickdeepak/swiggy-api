import { Router } from "express";
import { UserController } from "../controllers/userController";

class UserRoutes {
  public router: Router;

  constructor() {
    // initialize the constructor for router and getRoutes
    this.router = Router();
    this.getRoutes();
  }

  getRoutes() {
    this.router.get("/login", UserController.login);
    this.router.get("/login/test", UserController.test);
  }
}

export default new UserRoutes().router;

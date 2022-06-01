import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCourseController } from "./controllers/CreateCourseController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createCourseController = new CreateCourseController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle)
router.post("/courses", ensureAdmin, createCourseController.handle)
router.post("/compliments", createComplimentController.handle)
router.post("/login", authenticateUserController.handle)


export { router }
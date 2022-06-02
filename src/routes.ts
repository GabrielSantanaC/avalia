import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCourseController } from "./controllers/CreateCourseController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserComplimentsController } from "./controllers/ListUserComplimentsController";
import { ListCoursesController } from "./controllers/ListCoursesController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createCourseController = new CreateCourseController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const listUserComplimentsController = new ListUserComplimentsController();
const listCoursesController = new ListCoursesController();

router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/courses", ensureAuthenticated, ensureAdmin, createCourseController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)
router.get("/courses/compliments", ensureAuthenticated, listUserComplimentsController.handle)
router.get("/courses", ensureAuthenticated, listCoursesController.handle)


export { router }
import express from "express";
import { deleteCar, getCar, registerCar } from "../controller/carController.js";
const router = express.Router();

// router.get("/users", getUser);
// router.get("/users/:id", getUserById);
// router.post("/users", createUser);
// router.patch("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);
// // ------------ //
// router.patch("/login", login);

router.get("/car", getCar)
router.patch("/car", registerCar)
router.delete("/car/:id", deleteCar)

export default router;

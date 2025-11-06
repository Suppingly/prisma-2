import express from "express";
import FuelController from "../controllers/fuelController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router()
const fuelController = new FuelController();

router.post('/',authMiddleware,(req,res,next) =>
    fuelController.createFuel(req,res,next)
);
router.get('/',(req,res,next) =>
    fuelController.getAllFuels(req,res,next)
);
router.put('/:id',authMiddleware,(req,res,next) =>
    fuelController.updateFuel(req,res,next)
);
router.delete('/:id',authMiddleware,(req,res,next) =>
    fuelController.deleteFuel(req,res,next)
);
router.put('/:id/quantity',authMiddleware,(req,res,next) =>
    fuelController.updateQuantity(req,res,next)
);
export default router;
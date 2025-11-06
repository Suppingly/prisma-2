import express from "express";
import TransactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router()
const transactionController=new TransactionController();

router.post('/',authMiddleware,(req,res,next) =>
    transactionController.createTrasaction(req,res,next)
);
router.get('/my',authMiddleware,(req,res,next)=>
    transactionController.getAllTransactions(req,res,next)
);
export default router;
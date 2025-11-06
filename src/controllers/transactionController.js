import TransactionService from "../services/transactionService.js";
import { decodeMiddleware } from "../middlewares/decodeMiddleware.js";
class TransactionController {
    constructor(){
        this.transactionService = new TransactionService();
    }
    async createTrasaction(req,res,next) {
        try {
            const customerId = await decodeMiddleware(req,res).id;
            const transaction = await this.transactionService.createTransaction(customerId, req.body);
            res.status(201).json(transaction);
        } catch (err) {
            next(err);
        }
    }
    async getAllTransactions(req,res,next) {
        try {
            const customerId = await decodeMiddleware(req,res).id;
            const transactions = await this.transactionService.getAllTransactions(customerId);
            res.status(201).json(transactions);
        } catch (err) {
            next(err);
        }
    }
}
export default TransactionController
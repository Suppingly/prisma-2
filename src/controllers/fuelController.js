import FuelService from "../services/fuelService.js";

class FuelController {
    constructor(){
        this.fuelService = new FuelService();
    }
    async createFuel(req,res,next) {
        try {
            const fuel = await this.fuelService.createFuel(req.body);
            res.status(201).json(fuel);
        } catch (err) {
            next(err);
        }
    }
    async getAllFuels(req,res,next) {
        try {
            const fuel = await this.fuelService.getAllFuels();
            res.status(200).json(fuel);
        } catch (err) {
            next(err);
        }
    }
    async updateFuel(req,res,next) {
        try {
            const fuel = await this.fuelService.updateFuel({
                id: req.params.id,
                type: req.body.type,
                price: req.body.price,
                quantity:req.body.quantity
            });
            res.status(200).json(fuel);
        } catch (err) {
            next(err);
        }
    }
    async deleteFuel(req,res,next) {
        try {
            const fuel = await this.fuelService.deleteFuel({
                id: req.params.id
            });
            res.status(200).json(fuel);
        } catch (err) {
            next(err);
        }
    }
    async updateQuantity(req,res,next) {
        try {
            const quantity = await this.fuelService.updateQuantity({
                id: req.params.id,
                quantity:req.body.quantity
            });
            res.status(200).json(quantity);
        } catch (err) {
            next(err);
        }
    }
}
export default FuelController;
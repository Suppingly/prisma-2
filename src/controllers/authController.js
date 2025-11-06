import AuthService from "../services/authService.js";

class AuthController {
    constructor() {
        this.authService = new AuthService();
    }
    async register(req,res,next){
        try {
            const user = await this.authService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
    async login(req,res,next) {
        try {
            const token = await this.authService.login(req.body);
            res.status(200).json({token});
        } catch (error) {
            next(error);
        }
    }
}

export default AuthController;
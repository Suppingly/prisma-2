import JWT from "../utils/jwt.js";

export function decodeMiddleware(req,res) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({message:'No token provided'});
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({message:'No token provided'});
    try {
        const payload = JWT.decodeToken(token);
        return payload;
    } catch (err) {
        return res.status(401).json({message:'Invalid token'});
    }
}
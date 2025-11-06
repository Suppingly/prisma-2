import bcrypt from 'bcrypt';
import JWT from '../utils/jwt.js';
import { prisma } from '../app.js';

class AuthService {
    async register({email,password,name}){
        const hashed = await bcrypt.hash(password,10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashed
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        });
        return user;
    }
    async login({email,password}) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) throw new Error('User not found');

        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new Error('Invalid password');
        return JWT.signToken({
            id: user.id,
            name: user.name,
            email: user.email
        });
    }
}

export default AuthService;
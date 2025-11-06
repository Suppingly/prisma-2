import {prisma} from '../app.js';

class FuelService {
    async createFuel({type,price,quantity}) {
        return prisma.fuel.create({
            data:{
                type,
                price,
                quantity
            }
        });
    }
    async getAllFuels() {
        return prisma.fuel.findMany();
    }
    async updateFuel({id,type,price,quantity}) {
        return prisma.fuel.update({
            where:{
                id: Number(id)
            },
            data:{
                type,
                price,
                quantity
            }
        });
    }
    async deleteFuel({id}) {
        return prisma.fuel.delete({
            where:{
                id:Number(id)
            }
        });
    }
    async updateQuantity({id,quantity}){
        return prisma.fuel.update({
            where:{
                id:Number(id)
            },
            data:{
                quantity
            }
        });
    }
}

export default FuelService;
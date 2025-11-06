import {prisma} from '../app.js';

class TransactionService {
    async createTransaction(customerId,{fuelId,amount}) {
        const fuelInfo=await prisma.fuel.findUnique({
            where:{
                id:Number(fuelId)
            },
            select:{
                price:true,
                quantity:true
            }
        });
        console.log(customerId,fuelId)
        if (fuelInfo.quantity-amount<0) throw new Error('Low fuel quantity');
        await prisma.fuel.update({
            where:{
                id: Number(fuelId)
            },
            data:{
                quantity:fuelInfo.quantity-amount
            }
        })
        return prisma.transaction.create({
            data: {
                customerId,
                fuelId,
                amount,
                totalCost: fuelInfo.price*amount
            },
        });
    }
    async getAllTransactions(customerId) {
        return await prisma.$queryRaw`SELECT public."Transaction".id,public."Transaction"."fuelId",public."Fuel".type,public."Transaction".amount,public."Transaction"."totalCost",public."Transaction"."createdAt" from public."Transaction",public."Fuel" WHERE public."Transaction"."fuelId"=public."Fuel".id AND public."Transaction"."customerId"=${customerId} ORDER BY public."Transaction".id`;
    }
}
export default TransactionService
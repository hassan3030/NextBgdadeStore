// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// export default prisma;


// --------- code built in copy from prisma site to handle error

import { PrismaClient } from '@prisma/client' // create new ob from prisma

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

const connectToDb = async () => {
  try {
    await prismaClient.$connect();
    console.log('Connected to DB Succesfully ');
  } catch (error) {
    console.log('Connection Failed ', error);
    process.exit(-1);
  }
};

export { connectToDb, prismaClient };

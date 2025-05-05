import { PrismaClient } from '../../generated/prisma/index';
const dbClient = new PrismaClient();

const connectToDb = async () => {
  try {
    await dbClient.$connect();
    console.log('Connected to DB Succesfully ');
  } catch (error) {
    console.log('Connection Failed ', error);
    process.exit(-1);
  }
};

export { connectToDb };

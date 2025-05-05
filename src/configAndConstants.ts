import dotenv from 'dotenv';
dotenv.config({
  path: './.env'
});


// --------------------------------------
// Configuration Types
// --------------------------------------
interface Config {
  DATABASE_URL: string;
  ACCESS_TOKEN_KEY: string;
  REFRESH_TOKEN_KEY: string;
  ACCESS_TOKEN_EXPIRES: string;
  REFRESH_TOKEN_EXPIRES: string;
  PORT: number;
  NODE_ENV: 'development' | 'production' | 'staging';
  CORS_ORIGIN: string;
}

// --------------------------------------
// Configuration
// --------------------------------------

const config: Config = {
  DATABASE_URL: process.env.DATABASE_URL!,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY!,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY!,
  ACCESS_TOKEN_EXPIRES: process.env.ACCESS_TOKEN_EXPIRES!,
  REFRESH_TOKEN_EXPIRES: process.env.REFRESH_TOKEN_EXPIRES!,
  PORT: parseInt(process.env.PORT!, 10) || 3000,
  NODE_ENV: process.env.NODE_ENV! as 'development' | 'production' | 'staging' || 'development',
  CORS_ORIGIN: process.env.CORS_ORIGIN!,
}


// --------------------------------------
// Constants
// --------------------------------------
const cookieOptions = {
  secure: config.NODE_ENV === 'production',
  httpOnly: true,
}


export { cookieOptions, config };

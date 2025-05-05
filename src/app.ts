import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config, corsOptions, cookieOptions } from './configAndConstants';
import { globalErrorHandler } from './middlewares/error.middleware';

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ limit: '16KB', extended: true }));
app.use(express.json({ limit: '16Kb' }));



app.use(globalErrorHandler);
export { app };

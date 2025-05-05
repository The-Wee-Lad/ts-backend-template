import jwt from 'jsonwebtoken';
import { asyncHandler, ApiError, ApiResponse } from '../utils/index';
import { Request, Response, NextFunction } from 'express';

const verifyToken = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const accessToken: string | undefined = req.cookies?.accessToken || req.headers?.authorization?.split(' ')[1];

  if (!accessToken) {
    throw new ApiError(401, " No Access Token Found!", 'AUTH_001');
  }


})

export { verifyToken };
import jwt from 'jsonwebtoken';
import { User } from '../../generated/prisma';
import { config } from '../configAndConstants';
import { prismaClient } from '../db';
import ms from 'ms';
import { ApiError } from './ApiError';

const generateTokens = async (user: User) => {
  const accessToken = jwt.sign(user, config.ACCESS_TOKEN_KEY, {
    expiresIn: config.ACCESS_TOKEN_EXPIRES as ms.StringValue,
  });
  const refreshToken = jwt.sign(user, config.REFRESH_TOKEN_EXPIRES, {
    expiresIn: config.REFRESH_TOKEN_EXPIRES as ms.StringValue,
  });

  return { accessToken, refreshToken };
};

export { generateTokens };

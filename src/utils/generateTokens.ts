import jwt from 'jsonwebtoken';
import { User } from '../../generated/prisma';
import { config } from '../configAndConstants';
import { prismaClient } from '../db';
import ms from 'ms';
import { ApiError } from './ApiError';

const generateTokens = async (
  user: Omit<User, 'password' | 'refreshToken'>
) => {
  const accessToken = jwt.sign(user, config.ACCESS_TOKEN_KEY, {
    expiresIn: config.ACCESS_TOKEN_EXPIRES as ms.StringValue,
  });
  const refreshToken = jwt.sign(user, config.REFRESH_TOKEN_EXPIRES, {
    expiresIn: config.REFRESH_TOKEN_EXPIRES as ms.StringValue,
  });

  const updatedUser = await prismaClient.user.updateManyAndReturn({
    where: {
      id: user.id,
    },
    data: {
      refreshToken: refreshToken,
    },
    omit: {
      password: true,
      refreshToken: true,
    },
  });

  if (!updatedUser) {
    throw new ApiError(500, 'DB Server error', 'DB_003');
  }

  return { accessToken, refreshToken };
};

export { generateTokens };

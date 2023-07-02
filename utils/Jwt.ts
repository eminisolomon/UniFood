import * as jwt from 'jsonwebtoken';
import HttpError from './httpError';
import { IUserModel } from '../models/User';

const generateJWT = function (payload = {}, options = {}) {
  const privateKey = process.env.JWT_SECRETS;
  const defaultOptions = {
    expiresIn: 3 * 60 * 60 * 1000,
  };

  return jwt.sign(payload, privateKey, Object.assign(defaultOptions, options));
};

const generateForgotPasswordJWT = function (password: string, payload: object = {}, options: object = {}): string {
  const privateKey: any = process.env.JWT_SECRETS + password;
  const defaultOptions: object = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, privateKey, Object.assign(defaultOptions, options));
};

const validateToken = function (token: string): Object {
  try {
    const publicKey: any = process.env.JWT_SECRETS;
    let JWTToken = token.slice(7);
    return jwt.verify(JWTToken, publicKey);
  } catch (e) {
    throw new HttpError({
      title: 'invalid_token',
      detail: 'Invalid token',
      code: 400,
    });
  }
};

const tokenBuilder = async (user: IUserModel) => {
  const accessToken = generateJWT(
    {
      id: user._id,
      role: user.role?.name,
      tokenType: 'access',
    },
    {
      issuer: user.email,
      subject: user.email,
      audience: 'root',
    },
  );

  return {
    accessToken: accessToken,
  };
};

export { generateJWT, generateForgotPasswordJWT, validateToken, tokenBuilder };

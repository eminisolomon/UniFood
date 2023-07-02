import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/httpError';
import { jsonOne } from '../utils/general';
import { matchedData } from 'express-validator';
import User, { IUserModel } from '../models/User';
import { tokenBuilder } from '../utils/Jwt';
import { compare, hash } from 'bcrypt';
import { AuthInterface } from '../interfaces/Auth';
import { RoleType, OtpType } from '../utils/enums';
import Role from '../models/Role';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, email, username, phone, password } = req.body;

    const existingEmail = await User.exists({ email });
    if (existingEmail) {
      throw new HttpError({
        title: 'email',
        detail: 'Email address is already used',
        code: 422,
      });
    }

    const existingUsername = await User.exists({ username });
    if (existingUsername) {
      throw new HttpError({
        title: 'username',
        detail: 'Username is already used',
        code: 422,
      });
    }

    const existingPhone = await User.exists({ phone });
    if (existingPhone) {
      throw new HttpError({
        title: 'phone',
        detail: 'Phone number is already used',
        code: 422,
      });
    }

    const role = await Role.findOne({ name: RoleType.USER });
    if (!role) {
      throw new HttpError({
        title: 'role',
        detail: 'User role not found',
        code: 422,
      });
    }

    const hashPassword = await hash(password, 12);

    const user = new User({
      firstName,
      lastName,
      email,
      username,
      phone,
      password: hashPassword,
      role: role._id,
    });
    const savedUser = await user.save();

    return jsonOne<IUserModel>(res, 201, savedUser);
  } catch (error) {
    next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction): Promise<AuthInterface> => {
  try {
    let bodyData = matchedData(req, {
      includeOptionals: true,
      locations: ['body'],
    });

    const { email, password } = bodyData;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new HttpError({
        title: 'bad_login',
        detail: 'Account with email not found',
        code: 400,
      });
    }

    const isValidPass = await compare(password, existingUser.password);

    if (!isValidPass) {
      throw new HttpError({
        title: 'bad_login',
        detail: 'You have entered an invalid password',
        code: 400,
      });
    }

    const token = await tokenBuilder(existingUser);
    const response = {
      user: existingUser,
      accessToken: token.accessToken,
    };

    return jsonOne<AuthInterface>(res, 200, response);
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
  login,
};

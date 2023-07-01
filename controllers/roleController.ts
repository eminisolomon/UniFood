import { NextFunction, Request, Response } from 'express';
import { jsonAll } from '@utils/general';
import Role from '@models/Role';

export async function createRole() {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count === 0) {
      await Role.create({ name: 'user' });
      await Role.create({ name: 'admin' });
      await Role.create({ name: 'support' });

      console.log("Added 'user', 'admin', and 'support' to the roles collection");
    }
  } catch (err) {
    console.log('Error:', err);
  }
}

export async function getAllRole(req: Request, res: Response, next: NextFunction) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const count = await Role.countDocuments({});
    const totalPages = Math.ceil(count / limit);
    const currentPage = Math.min(page, totalPages);

    const roles = await Role.find()
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * limit)
      .limit(limit);

    const result = {
      roles,
    };

    const meta = {
      total: count,
      limit,
      totalPages,
      currentPage,
    };

    return jsonAll(res, 201, result, meta);
  } catch (error) {
    next(error);
  }
}

export default {
  getAllRole,
};

import { Router } from 'express';
import { getAllRole } from '../controllers/roleController';

const _router: Router = Router({
  mergeParams: true,
});

//ROLE LIST
_router.route('/list').get(getAllRole);

export const router = _router;

import { Router } from 'express';
import { users_get_all } from 'controllers/users.controller';

const router = Router();

router.get('/', users_get_all);

export default router;

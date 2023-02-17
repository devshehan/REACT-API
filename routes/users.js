import express from 'express';

const router = express.Router();

import { getUsers , createUser, searchUser, deleteUser, updateUser } from '../controllers/users.js';

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', searchUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
import { Router } from 'express';

import sessionRoutes from './session';
import cardsRouter from './cards';

import auth from '../middlewares/auth';

const routes = Router();

routes.use('/login', sessionRoutes);
routes.use('/cards', auth, cardsRouter);

export default routes;

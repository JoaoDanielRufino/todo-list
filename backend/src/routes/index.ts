import { Router } from 'express';

import sessionRoutes from './session';
import cardsRouter from './cards';

const routes = Router();

routes.use('/login', sessionRoutes);
routes.use('/cards', cardsRouter);

export default routes;

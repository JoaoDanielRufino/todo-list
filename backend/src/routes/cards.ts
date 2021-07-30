import { Router } from 'express';

import CardController from '../controllers/CardController';

import checkIdAndLogDeletionAndUpdate from '../middlewares/checkIdAndLogDeletionAndUpdate';

const cardsRouter = Router();

cardsRouter.get('/', CardController.index);

cardsRouter.post('/', CardController.create);

cardsRouter.delete('/:id', checkIdAndLogDeletionAndUpdate, CardController.delete);

cardsRouter.put('/:id', checkIdAndLogDeletionAndUpdate, CardController.update);

export default cardsRouter;

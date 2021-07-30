import { Router } from 'express';

import CardController from '../controllers/CardController';

const cardsRouter = Router();

cardsRouter.get('/', CardController.index);

cardsRouter.post('/', CardController.create);

cardsRouter.delete('/:id', CardController.delete);

cardsRouter.put('/:id', CardController.update);

export default cardsRouter;

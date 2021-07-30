import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Card from '../models/Card';

class CardController {
  async index(req: Request, res: Response) {
    const cardRepository = getRepository(Card);

    const response = await cardRepository.find();

    res.json(response);
  }

  async create(req: Request, res: Response) {
    const { id, titulo, conteudo, lista } = req.body;

    if (!id && (!titulo || !conteudo || !lista)) return res.sendStatus(400);

    const cardRepository = getRepository(Card);

    try {
      const response = await cardRepository.save({ titulo, conteudo, lista });

      res.json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { titulo, conteudo, lista } = req.body;

    const cardRepository = getRepository(Card);

    try {
      const response = await cardRepository.update(id, { titulo, conteudo, lista });

      if (response.affected === 0) return res.status(404).json({ message: 'Card not found' });

      res.json({ id, titulo, conteudo, lista });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const cardRepository = getRepository(Card);

    try {
      const responseDelete = await cardRepository.delete(id);

      if (responseDelete.affected === 0) return res.status(404).json({ message: 'Card not found' });

      const response = await cardRepository.find();

      res.json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  }
}

export default new CardController();

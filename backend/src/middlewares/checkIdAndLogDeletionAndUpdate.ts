import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Card from '../models/Card';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { id: idCard, titulo, conteudo, lista } = req.body;

  if (!id) return res.sendStatus(400);

  if (idCard && id !== idCard) return res.status(400).json({ message: 'ids do not match' });

  const cardRepository = getRepository(Card);
  try {
    const card = await cardRepository.findOne(id);

    if (!card) return res.status(404).json({ message: 'Card not found' });

    const date = new Date().toLocaleString('pt-br');
    if (req.method === 'PUT') {
      if (!titulo || !conteudo || !lista) return res.sendStatus(400);
      console.info(`${date} - Card ${id} - ${card.titulo} - Alterar`);
    } else if (req.method === 'DELETE') {
      console.info(`${date} - Card ${id} - ${card.titulo} - Remover`);
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Internal server error' });
  }

  return next();
};

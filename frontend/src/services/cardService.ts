import api from './api';

import { ListTypes, Card } from '../interfaces';

export const fetchCards = async (): Promise<Card[]> => {
  const response = await api.get('/cards');
  return response.data;
};

export const createCard = async (titulo: string, conteudo: string, lista: ListTypes): Promise<Card> => {
  const response = await api.post('/cards', { titulo, conteudo, lista });
  return response.data;
};

export const updateCard = async (card: Card): Promise<Card> => {
  const response = await api.put(`/cards/${card.id}`, card);
  return response.data;
};

export const deleteCard = async (id: string): Promise<Card[]> => {
  const response = await api.delete(`/cards/${id}`);
  return response.data;
};

import { useEffect, useState } from 'react';

import { Container } from './styles';

import Cards from './Cards';

import { Card, ListTypes } from '../../interfaces';

import List from '../../components/List';

import api from '../../services/api';

const Home = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function getCards() {
      const response = await api.get('/cards');
      setCards(response.data);
    }

    getCards();
  }, []);

  const handleListChange = async (id: string, list: ListTypes) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      const newCard: Card = { ...card, lista: list };
      const newCards = cards.filter((card) => card.id !== id); // Removendo o card antigo da lista
      newCards.push(newCard);
      setCards(newCards);
      await api.put(`/cards/${id}`, newCard);
    }
  };

  const handleDeleteCard = async (id: string) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      const newCards = cards.filter((card) => card.id !== id);
      setCards(newCards);
      await api.delete(`/cards/${id}`);
    }
  };

  const handleUpdateCard = async (id: string, title: string, content: string) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      const newCard: Card = { ...card, titulo: title, conteudo: content };
      const newCards = cards.map((card) => {
        if (card.id !== id) return card;
        return newCard;
      });
      setCards(newCards);
      await api.put(`/cards/${id}`, newCard);
    }
  };

  return (
    <Container>
      <List title="ToDo">
        <Cards
          cards={cards.filter((card) => card.lista === 'ToDo')}
          handleListChange={handleListChange}
          handleDeleteCard={handleDeleteCard}
          handleUpdateCard={handleUpdateCard}
        />
      </List>

      <List title="Doing">
        <Cards
          cards={cards.filter((card) => card.lista === 'Doing')}
          handleListChange={handleListChange}
          handleDeleteCard={handleDeleteCard}
          handleUpdateCard={handleUpdateCard}
        />
      </List>

      <List title="Done">
        <Cards
          cards={cards.filter((card) => card.lista === 'Done')}
          handleListChange={handleListChange}
          handleDeleteCard={handleDeleteCard}
          handleUpdateCard={handleUpdateCard}
        />
      </List>
    </Container>
  );
};

export default Home;

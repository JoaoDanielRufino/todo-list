import { useEffect, useState } from 'react';

import { Container } from './styles';

import Cards from './Cards';

import { Card, ListTypes } from '../../interfaces';

import List from '../../components/List';
import NewCard from '../../components/NewCard';

import api from '../../services/api';

const Home = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function getCards() {
      try {
        const response = await api.get('/cards');
        setCards(response.data);
      } catch (err) {
        alert('Falha ao acessar cards');
        console.log(err);
      }
    }

    getCards();
  }, []);

  const handleCreateCard = async (title: string, content: string) => {
    try {
      const response = await api.post('/cards', { titulo: title, conteudo: content, lista: 'ToDo' });
      setCards([...cards, response.data]);
    } catch (err) {
      alert('Falha ao criar card');
      console.log(err);
    }
  };

  const handleListChange = async (id: string, list: ListTypes) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      const newCard: Card = { ...card, lista: list };
      const newCards = cards.filter((card) => card.id !== id); // Removendo o card antigo da lista
      try {
        const response = await api.put(`/cards/${id}`, newCard);
        newCards.push(response.data);
        setCards(newCards);
      } catch (err) {
        alert('Falha ao atualizar card');
        console.log(err);
      }
    }
  };

  const handleDeleteCard = async (id: string) => {
    try {
      const response = await api.delete(`/cards/${id}`);
      setCards(response.data);
    } catch (err) {
      alert('Falha ao deletar card');
      console.log(err);
    }
  };

  const handleUpdateCard = async (id: string, title: string, content: string) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      const newCard: Card = { ...card, titulo: title, conteudo: content };
      try {
        const response = await api.put(`/cards/${id}`, newCard);
        const newCards = cards.map((card) => {
          if (card.id !== id) return card;
          return response.data;
        });
        setCards(newCards);
      } catch (err) {
        alert('Falha ao atualizar card');
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <List title="Novo">
        <NewCard handleCreateCard={handleCreateCard} />
      </List>

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

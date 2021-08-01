import { Container } from './styles';

import Card from '../../../components/Card';

import { Card as CardInterface, ListTypes } from '../../../interfaces';

interface Props {
  cards: CardInterface[];
  handleListChange: (id: string, list: ListTypes) => Promise<void>;
  handleDeleteCard: (id: string) => Promise<void>;
  handleUpdateCard: (id: string, title: string, content: string) => Promise<void>;
}

const Cards: React.FC<Props> = ({ cards, ...rest }) => (
  <Container>
    {cards.map((card) => (
      <li key={card.id}>
        <Card {...card} {...rest} />
      </li>
    ))}
  </Container>
);

export default Cards;

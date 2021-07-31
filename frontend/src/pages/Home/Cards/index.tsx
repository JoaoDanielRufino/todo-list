import { Container } from './styles';

import Card from '../../../components/Card';

import { Card as CardInterface } from '../../../interfaces';

interface Props {
  cards: CardInterface[];
}

const Cards: React.FC<Props> = ({ cards }) => (
  <Container>
    {cards.map((card, index) => (
      <li key={index}>
        <Card {...card} />
      </li>
    ))}
  </Container>
);

export default Cards;

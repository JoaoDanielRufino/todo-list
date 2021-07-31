import { Container } from './styles';

import Card from '../../../components/Card';

import { Card as CardInterface } from '../../../interfaces';

interface Props {
  cards: CardInterface[];
}

const Cards: React.FC<Props> = ({ cards }) => (
  <Container>
    {cards.map((card) => (
      <li>
        <Card {...card} />
      </li>
    ))}
  </Container>
);

export default Cards;

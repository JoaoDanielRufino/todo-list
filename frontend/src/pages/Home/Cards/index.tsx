import { Container } from './styles';

import Card from '../../../components/Card';

import { Card as CardInterface, CardHandlers } from '../../../interfaces';

interface Props extends CardHandlers {
  cards: CardInterface[];
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

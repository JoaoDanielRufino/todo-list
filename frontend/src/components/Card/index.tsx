import { FaRegEdit, FaAngleLeft, FaAngleRight, FaTrash } from 'react-icons/fa';

import { Container, CardHeader, CardContent, CardFooter } from './styles';

import { Card as CardInterface } from '../../interfaces';

const Card: React.FC<CardInterface> = ({ titulo, conteudo }) => (
  <Container>
    <CardHeader>
      <h3>{titulo}</h3>
      <FaRegEdit size={20} />
    </CardHeader>

    <CardContent>{conteudo}</CardContent>

    <CardFooter>
      <FaAngleLeft size={20} />
      <FaTrash size={18} />
      <FaAngleRight size={20} />
    </CardFooter>
  </Container>
);

export default Card;

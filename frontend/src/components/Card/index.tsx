import { useState } from 'react';
import { FaRegEdit, FaAngleLeft, FaAngleRight, FaTrash, FaBan, FaSave } from 'react-icons/fa';

import { Container, CardHeader, CardContent, CardFooter } from './styles';

import Textarea from '../Textarea';
import Input from '../Input';

import { Card as CardInterface } from '../../interfaces';

type Mode = 'DISPLAY' | 'EDIT';

const Card: React.FC<CardInterface> = ({ titulo, conteudo }) => {
  const [cardMode, setCardMode] = useState<Mode>('DISPLAY');

  const handleChangeCardMode = (mode: Mode) => {
    setCardMode(mode);
  };

  const renderDisplayMode = () => (
    <>
      <CardHeader>
        <h3>{titulo}</h3>
        <FaRegEdit size={20} onClick={() => handleChangeCardMode('EDIT')} />
      </CardHeader>

      <CardContent>{conteudo}</CardContent>

      <CardFooter>
        <FaAngleLeft size={20} />
        <FaTrash size={18} />
        <FaAngleRight size={20} />
      </CardFooter>
    </>
  );

  const renderEditMode = () => (
    <>
      <CardHeader>
        <Input placeholder="Título" />
      </CardHeader>

      <CardContent>
        <Textarea placeholder="Conteúdo..." />
      </CardContent>

      <CardFooter>
        <FaBan size={20} onClick={() => handleChangeCardMode('DISPLAY')} />
        <FaSave size={20} />
      </CardFooter>
    </>
  );

  return <Container>{cardMode === 'DISPLAY' ? renderDisplayMode() : renderEditMode()}</Container>;
};

export default Card;

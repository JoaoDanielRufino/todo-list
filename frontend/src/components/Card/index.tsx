import { useState } from 'react';
import { FaRegEdit, FaAngleLeft, FaAngleRight, FaTrash, FaBan, FaSave } from 'react-icons/fa';

import { Container, CardHeader, CardContent, CardFooter } from './styles';

import Textarea from '../Textarea';
import Input from '../Input';

import { Card as CardInterface, ListTypes } from '../../interfaces';

type Mode = 'DISPLAY' | 'EDIT';

interface Props extends CardInterface {
  handleListChange: (id: string, list: ListTypes) => Promise<void>;
  handleDeleteCard: (id: string) => Promise<void>;
  handleUpdateCard: (id: string, title: string, content: string) => Promise<void>;
}

const Card: React.FC<Props> = ({
  id,
  titulo,
  conteudo,
  lista,
  handleListChange,
  handleDeleteCard,
  handleUpdateCard,
}) => {
  const [cardMode, setCardMode] = useState<Mode>('DISPLAY');
  const [title, setTitle] = useState(titulo);
  const [textarea, setTextarea] = useState(conteudo);

  const handleChangeCardMode = (mode: Mode) => {
    setCardMode(mode);
  };

  const handleForwardClick = () => {
    if (lista === 'ToDo') handleListChange(id, 'Doing');
    else if (lista === 'Doing') handleListChange(id, 'Done');
  };

  const handleBackClick = () => {
    if (lista === 'Doing') handleListChange(id, 'ToDo');
    else if (lista === 'Done') handleListChange(id, 'Doing');
  };

  const handleDeleteClick = () => {
    handleDeleteCard(id);
  };

  const handleSaveClick = () => {
    handleUpdateCard(id, title, textarea);
    setCardMode('DISPLAY');
  };

  const renderDisplayMode = () => (
    <>
      <CardHeader>
        <h3>{titulo}</h3>
        <FaRegEdit size={20} onClick={() => handleChangeCardMode('EDIT')} />
      </CardHeader>

      <CardContent>{conteudo}</CardContent>

      <CardFooter>
        <FaAngleLeft size={20} onClick={handleBackClick} />
        <FaTrash size={18} onClick={handleDeleteClick} />
        <FaAngleRight size={20} onClick={handleForwardClick} />
      </CardFooter>
    </>
  );

  const renderEditMode = () => (
    <>
      <CardHeader>
        <Input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      </CardHeader>

      <CardContent>
        <Textarea placeholder="Conteúdo..." value={textarea} onChange={(e) => setTextarea(e.target.value)} />
      </CardContent>

      <CardFooter>
        <FaBan size={20} onClick={() => handleChangeCardMode('DISPLAY')} />
        <FaSave size={20} onClick={handleSaveClick} />
      </CardFooter>
    </>
  );

  return <Container>{cardMode === 'DISPLAY' ? renderDisplayMode() : renderEditMode()}</Container>;
};

export default Card;

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

  const handleForwardClick = async () => {
    if (lista === 'ToDo') await handleListChange(id, 'Doing');
    else if (lista === 'Doing') await handleListChange(id, 'Done');
  };

  const handleBackClick = async () => {
    if (lista === 'Doing') await handleListChange(id, 'ToDo');
    else if (lista === 'Done') await handleListChange(id, 'Doing');
  };

  const handleDeleteClick = async () => {
    await handleDeleteCard(id);
  };

  const handleSaveClick = async () => {
    await handleUpdateCard(id, title, textarea);
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
        <FaAngleLeft
          size={20}
          cursor={lista === 'ToDo' ? 'default' : 'pointer'}
          color={lista === 'ToDo' ? '#ccc' : 'black'}
          onClick={handleBackClick}
        />
        <FaTrash size={18} cursor="pointer" onClick={handleDeleteClick} />
        <FaAngleRight
          size={20}
          cursor={lista === 'Done' ? 'default' : 'pointer'}
          color={lista === 'Done' ? '#ccc' : 'black'}
          onClick={handleForwardClick}
        />
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
        <FaBan size={20} cursor="pointer" onClick={() => handleChangeCardMode('DISPLAY')} />
        <FaSave size={20} cursor="pointer" onClick={handleSaveClick} />
      </CardFooter>
    </>
  );

  return <Container>{cardMode === 'DISPLAY' ? renderDisplayMode() : renderEditMode()}</Container>;
};

export default Card;

import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { Container, CardHeader, CardContent, CardFooter } from './styles';

import Input from '../Input';
import Textarea from '../Textarea';

interface Props {
  handleCreateCard: (title: string, content: string) => Promise<void>;
}

const NewCard: React.FC<Props> = ({ handleCreateCard }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddClick = async () => {
    await handleCreateCard(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <Container>
      <CardHeader>
        <Input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      </CardHeader>

      <CardContent>
        <Textarea placeholder="Conteúdo..." value={content} onChange={(e) => setContent(e.target.value)} />
      </CardContent>

      <CardFooter>
        <FaPlusCircle size={20} onClick={handleAddClick} />
      </CardFooter>
    </Container>
  );
};

export default NewCard;

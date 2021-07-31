import { Container } from './styles';

interface Props {
  title: string;
}

const List: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
};

export default List;

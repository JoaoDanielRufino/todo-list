import { Container } from './styles';

interface Props {
  title: string;
}

const List: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>

      {children}
    </Container>
  );
};

export default List;

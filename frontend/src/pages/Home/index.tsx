import { Container } from './styles';

import List from '../../components/List';

const Home = () => (
  <Container>
    <List title="To Do" />
    <List title="Doing" />
    <List title="Done" />
  </Container>
);

export default Home;

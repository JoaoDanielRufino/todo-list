import { Container } from './styles';

import List from '../../components/List';
import Card from '../../components/Card';

const Home = () => (
  <Container>
    <List title="To Do">
      <ul>
        <li style={{ marginTop: '5px' }}>
          <Card />
        </li>
        <li style={{ marginTop: '5px' }}>
          <Card />
        </li>
        <li style={{ marginTop: '5px' }}>
          <Card />
        </li>
      </ul>
    </List>

    <List title="Doing">
      <ul>
        <li style={{ marginTop: '5px' }}>
          <Card />
        </li>
        <li style={{ marginTop: '5px' }}>
          <Card />
        </li>
      </ul>
    </List>

    <List title="Done">
      <ul>
        <li style={{ marginTop: '5px' }}>
          <Card />
        </li>
      </ul>
    </List>
  </Container>
);

export default Home;

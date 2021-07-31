import { Container } from './styles';

import Cards from './Cards';

import List from '../../components/List';

const Home = () => (
  <Container>
    <List title="To Do">
      <Cards
        cards={[
          { titulo: 'test', conteudo: 'conteudo' },
          { titulo: 'test', conteudo: 'conteudo' },
          { titulo: 'test', conteudo: 'conteudo' },
        ]}
      />
    </List>

    <List title="Doing">
      <Cards
        cards={[
          { titulo: 'test', conteudo: 'conteudo' },
          { titulo: 'test', conteudo: 'conteudo' },
        ]}
      />
    </List>

    <List title="Done">
      <Cards cards={[{ titulo: 'test', conteudo: 'conteudo' }]} />
    </List>
  </Container>
);

export default Home;

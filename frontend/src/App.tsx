import Header from './components/Header';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>
        <Home />
      </main>
    </>
  );
}

export default App;

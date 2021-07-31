import { useEffect, useState } from 'react';

import api from './services/api';

import Header from './components/Header';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function performLogin() {
      try {
        const response = await api.post('/login', { login: 'letscode', senha: 'lets@123' });
        const { token } = response.data;
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setLoading(false);
      } catch (err) {
        alert('Falha ao autenticar');
        console.log(err);
      }
    }

    performLogin();
  }, []);

  return loading ? (
    <h1>Atenticando...</h1>
  ) : (
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

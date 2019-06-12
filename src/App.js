import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

/** Tela inical do projeto */
import Home from './views/Home';
import Usuario from './views/Usuario/Usuario';
import Repositorio from './views/Repositorios/Repositorio';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/usuario/:id" component={Usuario} />
      <Route path="/exibirRepositorio/:id" component={Repositorio} />
    </Router>
    {/* <Footer /> */}
  </Provider>
);

export default App;

import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

/** Exemplos com useState */
import Home from './views/UseState/Home';
import State from './views/UseState/State';
import Effect from './views/UseState/Effect';

/** Exemplos com useReducer */
import UtilizandoClass from './views/UseReducer/UtilizandoClass';
import UtilzandoHooks from './views/UseReducer/UtilizandoHooks';

/** Exemplos com useContext */
import HooksContext from './views/UseContext/HooksContext';

import ModeloSemContext from './views/UseContext/ModeloSemContext';
import ModeloContext from './views/UseContext/ModeloContext';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/state" component={State} />
      <Route path="/effect" component={Effect} />
      <Route path="/utilizandoClass" component={UtilizandoClass} />
      <Route path="/utilizandoHooks" component={UtilzandoHooks} />
      <Route path="/hooksContext" component={HooksContext} />
      <Route path="/modeloSemContext" component={ModeloSemContext} />
      <Route path="/ModeloContext" component={ModeloContext} />
    </Router>
  </Provider>
);

export default App;

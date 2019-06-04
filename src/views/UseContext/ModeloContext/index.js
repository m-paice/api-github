/**
* @author Matheus Paice <matheus.ferreira@jbtec.com.br>
* @description Primeiro Nivel com context
*/

import React from 'react';

const CorContext = React.createContext();

const PrimeiroNivel = () => (
  <div>
    <h1> Primeiro Nivel </h1>
    <SegundoNivel />
  </div>
);
const SegundoNivel = () => (
  <div>
    <h1> Segundo Nivel </h1>
    <TerceiroNivel />
  </div>
);

const TerceiroNivel = () => (
  <CorContext.Consumer>
    {context => <div>  <h1>Terceiro Nivel </h1> {context}  </div>}
  </CorContext.Consumer>
);

class Index extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <CorContext.Provider value="Vermelho">
          <PrimeiroNivel />
        </CorContext.Provider>
      </div>
    );
  }
}

export default Index;

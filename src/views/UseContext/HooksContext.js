/**
* @author Matheus Paice <matheus.ferreira@jbtec.com.br>
* @description Primeiro Nivel com context
*/

import React, { useContext } from 'react';

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

const TerceiroNivel = () => {
  const context = useContext(CorContext);
  return (
    <div> { context } </div>
  );
};

const Index = () => (
  <CorContext.Provider value="vermelho">
    <PrimeiroNivel />
  </CorContext.Provider>
);

export default Index;

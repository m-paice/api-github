/**
* @author Matheus Paice <matheus.ferreira@jbtec.com.br>
* @description Modelo de utuilzação do context'
*/

import React from 'react';

import PropTypes from 'prop-types';

const PrimeiroNivel = (props) => {
  const { cor } = props;
  return (
    <div>
      <h1>PrimeiroNivel</h1>
      <SegundoNivel cor={cor} />
    </div>
  );
};

PrimeiroNivel.propTypes = {
  cor: PropTypes.string.isRequired,
};

const SegundoNivel = (props) => {
  const { cor } = props;
  return (
    <div>
      <h1>Segundo Nivel</h1>
      <TerceiroNivel cor={cor} />
    </div>
  );
};

SegundoNivel.propTypes = {
  cor: PropTypes.string.isRequired,
};

const TerceiroNivel = (props) => {
  const { cor } = props;
  return (
    <div>
      <h1>Terceiro Nivel</h1>
      {cor}
    </div>
  );
};

TerceiroNivel.propTypes = {
  cor: PropTypes.string.isRequired,
};

class ModeloSemContext extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <PrimeiroNivel cor="Azul" />
    );
  }
}

ModeloSemContext.propTypes = {

};

export default ModeloSemContext;

/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Modelo de utilização do useReducer do React Hooks
 */

import React, { useReducer } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * @description Importação dos componentes utilizado pelo useReducer
 */
import {
  initialState, cliente, Creators as clienteActions,
} from '../../store/ducks/cliente';

/**
 * @description Função principal do componente
 */
const UtilizandoHooks = (props) => {
  const [state, dispatch] = useReducer(cliente, initialState);

  const { novoCliente } = props;

  return (
    <div>
      <div>{`ID: ${state.all.map(v => v)}`}</div>
      <button
        type="button"
        onClick={() => dispatch(novoCliente({
          id: Math.random(), nome: 'Rainã Pepe', email: 'raina.pepe@jbtec.com.br', telefone: '(14) 99889-1198',
        }))}
      > Novo
      </button>
    </div>
  );
};

UtilizandoHooks.propTypes = {
  novoCliente: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(clienteActions, dispatch);

export default connect(null, mapDispatchToProps)(UtilizandoHooks);

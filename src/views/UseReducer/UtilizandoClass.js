/**
* @author Matheus Paice <matheus.ferreira@jbtec.com.br>
* @description Modelo utilizando class
*/

import React from 'react';

/** Importação do conector dos states e dispatch actions */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

/** Importação da action */
import { Creators as clienteActions } from '../../store/ducks/cliente';

class UtilizandoClass extends React.Component {
  componentDidMount() {} // Apenas para informar que utilizarei classe

  render() {
    const { all, novoCliente } = this.props;

    return (
      <div>
        {all && <p>{`Id: ${all.map(v => v)}`}</p>}

        <button
          type="button"
          onClick={() => novoCliente(
            {
              id: Math.random(), nome: 'Rainã Pepe', email: 'raina.pepe@jbtec.com.br', telefone: '(14) 99889-1198',
            },
          )}
        > Novo
        </button>
      </div>
    );
  }
}

UtilizandoClass.propTypes = {
  all: PropTypes.arrayOf(PropTypes.number).isRequired,
  novoCliente: PropTypes.func.isRequired,
};

/**
 * @description Capturar dados do estado da aplicação
 * @param {Object} state
 */
const mapStateToProps = state => ({
  all: state.cliente.all,
});

/**
 * @description Disparar funções para alterar o estado da aplicação
 * @param {Function} dispatch
 */
const mapDispatchToProps = dispatch => bindActionCreators(clienteActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(UtilizandoClass);

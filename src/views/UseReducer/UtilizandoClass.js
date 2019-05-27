/**
* @author Matheus Paice <matheus.ferreira@jbtec.com.br>
* @description Modelo utilizando class
*/

import React from 'react';

/** Importação do conector dos states e dispatch actions */
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

/** Importação da action */
import { novoCliente } from '../../store/ducks/cliente';

class UtilizandoClass extends React.Component {
  componentDidMount() {} // Apenas para informar que utilizarei classe

  render() {
    const { clientes, adicionarCliente } = this.props;

    return (
      <div>
        <p>{`Nomes: ${clientes.map(v => v.nome)}`}</p>

        <button
          type="button"
          onClick={() => adicionarCliente(
            'Rainã Pepe', 'raina.pepe@jbtec.com.br', '(14) 99889-1198',
          )}
        > Novo
        </button>
      </div>
    );
  }
}

UtilizandoClass.propTypes = {
  clientes: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
  })).isRequired,
  adicionarCliente: PropTypes.func.isRequired,
};

/**
 * @description Capturar dados do estado da aplicação
 * @param {Object} state
 */
const mapStateToProps = state => ({
  clientes: state.cliente.clientes,
});

/**
 * @description Disparar funções para alterar o estado da aplicação
 * @param {Function} dispatch
 */
const mapDispatchToProps = dispatch => ({
  adicionarCliente: (nome, email, telefone) => dispatch(novoCliente(nome, email, telefone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UtilizandoClass);

/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Home
 */

import React from 'react';

import PropTypes from 'prop-types';

import { reduxForm, Form, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ActionsUsuario } from '../../store/ducks/usuario';

import Input from '../../components/Input';

import ListaUsuarios from '../Usuario/ListaUsuarios';

class Home extends React.Component {
    componentDidMount() {}

    handleSubmit = values => {
        const { buscarUsuario } = this.props;
        const data = {
            values,
            request: 'users',
        };
        return buscarUsuario(data);
    };

    render() {
        const { handleSubmit } = this.props;

        return (
          <div>
            <Form onSubmit={handleSubmit(v => this.handleSubmit(v))}>
              <Field name="search" component={Input} labelText="Pesqusiar" placeholder="Digite nome do usuário" />
              <input type="submit" value="Buscar" />
            </Form>

            <div>
              <ListaUsuarios />
            </div>
          </div>
        );
    }
}
Home.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    buscarUsuario: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(ActionsUsuario, dispatch);

export default reduxForm({
    form: 'search',
})(
    connect(
        null,
        mapDispatchToProps,
    )(Home),
);

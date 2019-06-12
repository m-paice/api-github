import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ActionUsuario } from '../../store/ducks/usuario';

const Repositorio = ({ match, usuario, exibirRepositorio, repositorio }) => {
    useEffect(() => {
        exibirRepositorio(usuario, match.params.id);
    }, []);
    return <div> {repositorio && repositorio.full_name} </div>;
};

Repositorio.propTypes = {
    match: PropTypes.object.isRequired,
    usuario: PropTypes.string.isRequired,
    exibirRepositorio: PropTypes.func.isRequired,
    repositorio: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    usuario: state.usuario.usuario.login,
    repositorio: state.usuario.repositorio,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionUsuario, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Repositorio);

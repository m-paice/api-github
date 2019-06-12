import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as TypesActionsUsuario } from '../../store/ducks/usuario';

import Repositorio from '../Repositorios/ListaRepositorios';

const Usuario = ({ match, exibirUsuario, listarRepositorio, usuario, repositorios, carregando, erro }) => {
    useEffect(() => {
        exibirUsuario(match.params.id);
        listarRepositorio(match.params.id);
    }, []);

    if (carregando) return <div> Carregando... </div>;
    if (erro) return <div> Erro </div>;
    return (
      <div>
        {usuario && (
        <div>
                    Nome: {usuario.login} <br />
                    Seguidores: {usuario.followers} <br />
                    Seguidos: {usuario.following} <br />
          <img alt="" src={usuario.avatar_url} width="80px" height="80px" /> <br />
                    E-mail: {usuario.email} <br />
                    Bio: {usuario.bio} <br />
        </div>
            )}

        {usuario && <Repositorio repositorios={repositorios} />}
      </div>
    );
};

Usuario.propTypes = {
    match: PropTypes.object.isRequired,
    exibirUsuario: PropTypes.func.isRequired,
    listarRepositorio: PropTypes.func.isRequired,
    usuario: PropTypes.object.isRequired,
    carregando: PropTypes.bool.isRequired,
    erro: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    usuario: state.usuario.usuario,
    repositorios: state.usuario.repositorios,
    carregando: state.usuario.carregando,
    erro: state.usuario.erro,
});

const mapDispatchToProps = dispatch => bindActionCreators(TypesActionsUsuario, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Usuario);

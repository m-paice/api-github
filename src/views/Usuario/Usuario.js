import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as TypesActionsUsuario } from '../../store/ducks/usuario';

import Repositorio from '../Repositorios/ListaRepositorios';

import { ContainerPerfil, FotoPerfil, InformacaoPerfil, NomeUsuario } from '../../css/styles';

const Usuario = ({ match, exibirUsuario, listarRepositorio, usuario, repositorios, carregando, erro }) => {
    useEffect(() => {
        exibirUsuario(match.params.id);
        listarRepositorio(match.params.id);
    }, []);

    if (carregando) return <div> Carregando... </div>;
    if (erro) return <div> Erro </div>;
    return (
      <ContainerPerfil>
        {usuario && (
        <div>
          <FotoPerfil alt="" src={usuario.avatar_url} width="80px" height="80px" /> <br />
          <InformacaoPerfil>
            <NomeUsuario> {usuario.login} </NomeUsuario>
            {usuario.bio} <br />
                        followers: {usuario.followers} <i className="fas fa-heart" /> following: {usuario.following}{' '}
            <i className="fas fa-paper-plane" />
            <br />
            {usuario.email && `E-mail: ${usuario.email}`} <br />
          </InformacaoPerfil>
        </div>
            )}

        {usuario && <Repositorio repositorios={repositorios} />}
      </ContainerPerfil>
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

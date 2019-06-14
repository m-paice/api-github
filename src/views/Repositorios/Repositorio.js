import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ActionUsuario } from '../../store/ducks/usuario';

import { ContentRepositorio, LinkGit, TituloRepo, DivCentro, Botao } from '../../css/styles';

const Repositorio = ({ match, usuario, exibirRepositorio, zeraUsuario, repositorio, history }) => {
    useEffect(() => {
        exibirRepositorio(usuario, match.params.id);
    }, []);

    const NovoUsuario = () => {
        zeraUsuario();
        return history.push('/');
    };

    return (
      <ContentRepositorio>
        {repositorio ? (
          <div>
            <Botao type="button" onClick={() => NovoUsuario()}>
                        Buscar novo usuário
            </Botao>
            <TituloRepo> {repositorio.full_name} </TituloRepo>
            <p> {repositorio.description} </p>
            <div style={{ display: 'flex' }}>
              <DivCentro> {repositorio.language} </DivCentro>
              <DivCentro>
                <i className="fas fa-star">{repositorio.stargazers_count}</i>
              </DivCentro>
            </div>
            <LinkGit>
              <a href={repositorio.html_url}> {repositorio.html_url} </a>
            </LinkGit>
          </div>
            ) : (
              <div> Carregando </div>
            )}
      </ContentRepositorio>
    );
};

Repositorio.propTypes = {
    match: PropTypes.object.isRequired,
    usuario: PropTypes.string.isRequired,
    exibirRepositorio: PropTypes.func.isRequired,
    repositorio: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
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

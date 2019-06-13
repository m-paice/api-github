import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ContainerLista, ItensLista, TextoItem, StartComponent, BotaoOrdenar } from '../../css/styles';

import { Creators as ActionsUsuario } from '../../store/ducks/usuario';

const ListaRepositorio = ({ repositorios }) => {
    const [ordem, setOrdem] = useState(false);

    const crescente = value => {
        return value
            .sort((a, b) => a.stargazers_count - b.stargazers_count)
            .map(v => (
              <Link key={v.id} to={`/exibirRepositorio/${v.name}`}>
                <ItensLista>
                  <TextoItem>
                    {v.name}
                    <StartComponent>
                      <i className="far fa-star">{v.stargazers_count}</i>
                    </StartComponent>
                  </TextoItem>
                </ItensLista>
              </Link>
            ));
    };
    const descrescente = value => {
        return value
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map(v => (
              <Link key={v.id} to={`/exibirRepositorio/${v.name}`}>
                <ItensLista>
                  <TextoItem>
                    {v.name}
                    <StartComponent>
                      <i className="far fa-star">{v.stargazers_count}</i>
                    </StartComponent>
                  </TextoItem>
                </ItensLista>
              </Link>
            ));
    };

    return (
      <ContainerLista>
        {repositorios.length !== 0 && (
        <BotaoOrdenar type="button" onClick={() => setOrdem(!ordem)}>
                    Alterar Ordem
        </BotaoOrdenar>
            )}
        {repositorios && ordem ? crescente(repositorios) : descrescente(repositorios)}
      </ContainerLista>
    );
};

ListaRepositorio.propTypes = {
    repositorios: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(ActionsUsuario, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListaRepositorio);

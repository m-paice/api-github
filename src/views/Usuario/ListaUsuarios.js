import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ContainerLista, ItensLista, TextoItem } from '../../css/styles';

const ListaUsuarios = ({ usuarios, carregando, erro }) => {
    if (carregando) return <div> Carregando... </div>;
    if (erro) return <div> Erro </div>;

    return (
      <ContainerLista>
        {usuarios &&
                usuarios.map(value => (
                  <Link to={`/usuario/${value.login}`} key={value.id}>
                    <ItensLista>
                      <TextoItem> {value.login} </TextoItem>
                    </ItensLista>
                  </Link>
                ))}
      </ContainerLista>
    );
};

ListaUsuarios.propTypes = {
    usuarios: PropTypes.array.isRequired,
    carregando: PropTypes.bool.isRequired,
    erro: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    usuarios: state.usuario.usuarios,
    carregando: state.usuario.carregando,
    erro: state.usuario.erro,
});

export default connect(
    mapStateToProps,
    null,
)(ListaUsuarios);

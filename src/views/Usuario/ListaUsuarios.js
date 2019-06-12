import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ListaUsuarios = ({ usuarios, carregando, erro }) => {
    if (carregando) return <div> Carregando... </div>;
    if (erro) return <div> Erro </div>;

    return (
      <ul>
        {usuarios &&
                usuarios.map(value => (
                  <Link to={`/usuario/${value.login}`} key={value.id}>
                    <li> {value.login}</li>
                  </Link>
                ))}
      </ul>
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

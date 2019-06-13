/**
 * @author Matheus Paice <matheus.paice@gmail.com>
 * @description Arquivo responsavel por chamar as sagas e atualizar os reducers
 */

import { takeLatest, put } from 'redux-saga/effects'; // funções utilizadas da saga
import { api } from '../services/api'; // API base

import { Types as TypesActionsUsuario } from '../store/ducks/usuario';

/**
 * @description Função disparada após action buscar usuário ser acioanda
 * @param {object} action
 */
function* buscarUsuario(action) {
    try {
        const response = yield api.get(action.data.request, action.data.values.search);
        yield put({ type: TypesActionsUsuario.CARREGAMENTO_SUCESSO, data: response.items });
    } catch (e) {
        yield put({ type: TypesActionsUsuario.CARREGAMENTO_FALHA });
    }
}
/**
 * @description Função disparada após action exibir usuário ser acioanda
 * @param {object} action
 */
function* exibirUsuario(action) {
    try {
        const response = yield api.getUsuario(action.data);
        yield put({ type: TypesActionsUsuario.USUARIO_SUCESSO, data: response });
    } catch (e) {
        yield put({ type: TypesActionsUsuario.USUARIO_FALHA });
    }
}
/**
 * @description Função disparada após action listar repositorio ser acioanda
 * @param {object} action
 */
function* listarRepositorio(action) {
    try {
        const response = yield api.getRepositorios(action.data);
        yield put({ type: TypesActionsUsuario.REPOSITORIO_SUCESSO, data: response });
    } catch (e) {
        yield put({ type: TypesActionsUsuario.REPOSITORIO_FALHA });
    }
}
/**
 * @description Função disparada após action exibir repositorio ser acioanda
 * @param {object} action
 */
function* exibirRepositorio(action) {
    try {
        const response = yield api.getRepositorio(action.data.usuario, action.data.repositorio);
        yield put({ type: TypesActionsUsuario.EXIBIR_REPOSITORIO_SUCESSO, data: response });
    } catch (e) {
        yield put({ type: TypesActionsUsuario.EXIBIR_REPOSITORIO_FALHA });
    }
}

/**
 * @description Função responsável por fica verificando action e disparar um novo ação
 */
function* watcherUsuario() {
    yield takeLatest(TypesActionsUsuario.CARREGAMENTO_INICIADO, buscarUsuario);
    yield takeLatest(TypesActionsUsuario.USUARIO_INICIADO, exibirUsuario);
    yield takeLatest(TypesActionsUsuario.REPOSITORIO_INICIADO, listarRepositorio);
    yield takeLatest(TypesActionsUsuario.EXIBIR_REPOSITORIO_INICIADO, exibirRepositorio);
}

export default watcherUsuario;

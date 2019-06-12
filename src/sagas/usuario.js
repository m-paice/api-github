import { takeLatest, put } from 'redux-saga/effects';
import { api } from '../services/api';

import { Types as TypesActionsUsuario } from '../store/ducks/usuario';

function* buscarUsuario(action) {
    try {
        const response = yield api.get(action.data.request, action.data.values.search);
        yield put({ type: TypesActionsUsuario.CARREGAMENTO_SUCESSO, data: response.items });
    } catch (e) {
        yield put({ type: TypesActionsUsuario.CARREGAMENTO_FALHA });
    }
}
function* exibirUsuario(action) {
    try {
        const response = yield api.getUsuario(action.data);
        yield put({ type: TypesActionsUsuario.USUARIO_SUCESSO, data: response });
    } catch (e) {
        yield put({ type: TypesActionsUsuario.USUARIO_FALHA });
    }
}
function* listarRepositorio(action) {
    try {
        const response = yield api.getRepositorios(action.data);
        yield put({ type: TypesActionsUsuario.REPOSITORIO_SUCESSO, data: response });
    } catch (e) {
        yield put({ type: TypesActionsUsuario.REPOSITORIO_FALHA });
    }
}

function* exibirRepositorio(action) {
    try {
        const response = yield api.getRepositorio(action.data.usuario, action.data.repositorio);
        yield put({ type: TypesActionsUsuario.EXIBIR_REPOSITORIO_SUCESSO, data: response });
    } catch (e) {
        yield put({ type: TypesActionsUsuario.EXIBIR_REPOSITORIO_FALHA });
    }
}

function* watcherUsuario() {
    yield takeLatest(TypesActionsUsuario.CARREGAMENTO_INICIADO, buscarUsuario);
    yield takeLatest(TypesActionsUsuario.USUARIO_INICIADO, exibirUsuario);
    yield takeLatest(TypesActionsUsuario.REPOSITORIO_INICIADO, listarRepositorio);
    yield takeLatest(TypesActionsUsuario.EXIBIR_REPOSITORIO_INICIADO, exibirRepositorio);
}

export default watcherUsuario;

import { takeLatest, put } from 'redux-saga/effects';

import { Types as TypesActions } from '../store/ducks/cliente';

function* novoCliente(action) {
  const api = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve(put({ type: TypesActions.CARREGAMENTO_SUCESSO, data: action.data.id }));
    }, 2000);
  });

  try {
    yield api;
  } catch (e) {
    yield put({ type: TypesActions.CARREGAMENTO_FALHA });
  }
}

function* watcherCliente() {
  yield takeLatest(TypesActions.CARREGAMENTO_INICIADO, novoCliente);
}

export default watcherCliente;

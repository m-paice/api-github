/**
 * @author Matheus Paice <matheus.paice@gmail.com>
 * @description Arquivo de sagas
 */

import { all } from 'redux-saga/effects';
import watcherUsuario from './usuario';

function* sagas() {
    yield all([watcherUsuario()]);
}

export default sagas;

/**
 * @author Matheus Paice <matheus.paice@gmail.com>
 * @description Arquivo de sagas
 */

import { all } from 'redux-saga/effects';
import watcherCliente from './cliente';

function* sagas() {
  yield all([watcherCliente()]);
}

export default sagas;

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { usuario } from './usuario';

/**
 * @description Combinar todos os reducer para alimentar o redux
 */
const rootReducers = combineReducers({
    usuario,
    form: formReducer, // Config para utilização do redux form
});

export default rootReducers;

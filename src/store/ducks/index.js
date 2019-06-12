import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { usuario } from './usuario';

const rootReducers = combineReducers({
    usuario,
    form: formReducer,
});

export default rootReducers;

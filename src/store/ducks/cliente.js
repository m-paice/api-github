/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Action e Reducer cliente
 * TODO: Itilizar typescript e redux-saga
 */

/**
  * @description Declaração de types do reducer
  */
export const Types = {
  NAO_INICIADO: '@cliente/NAO_INICIADO',
  CARREGAMENTO_INICIADO: '@cliente/CARREGAMENTO_INICIADO',
  CARREGAMENTO_SUCESSO: '@cliente/CARREGAMENTO_SUCESSO',
  CARREGAMENTO_FALHA: '@cliente/LOAD_FAILED',
};

/**
 * @description Actions cliente
 */
export const Creators = {
  novoCliente: values => ({
    type: Types.CARREGAMENTO_INICIADO,
    data: values,
  }),
};

/**
 * @description Dados iniciais do reducer cliente
 */
export const initialState = {
  byId: {},
  all: [Math.random(), Math.random()],
  status: Types.NAO_INICIADO,
};

/**
 * @description Reducer para verificar e manipular actions acionadas
 * @param {Object} state
 * @param {Object} action
 */
export const cliente = (state = initialState, action) => {
  switch (action.type) {
    case Types.CARREGAMENTO_INICIADO:
      return Object.assign({}, state, {
        status: Types.CARREGAMENTO_INICIADO,
      });
    case Types.CARREGAMENTO_SUCESSO:
      return Object.assign({}, state, {
        all: [...state.all, action.data],
        status: Types.CARREGAMENTO_SUCESSO,
      });
    case Types.CARREGAMENTO_FALHA:
      return Object.assign({}, state, {
        status: Types.CARREGAMENTO_FALHA,
      });
    default:
      return state;
  }
};

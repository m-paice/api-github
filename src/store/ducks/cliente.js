/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Action e Reducer cliente
 */

/**
  * @description Declaração de types do reducer
  */
export const Types = {
  NOVO_CLIENTE: 'NOVO_CLIENTE',
};

/**
 * @description Action para adionar novo cliente
 * @param {String} nome
 * @param {String} email
 * @param {String} telefone
 */
export function novoCliente(nome, email, telefone) {
  return {
    type: Types.NOVO_CLIENTE,
    data: {
      nome,
      email,
      telefone,
    },
  };
}

/**
 * @description Dados iniciais do reducer cliente
 */
export const initialState = {
  clientes: [
    { nome: 'Matheus Paice', email: 'matheus.paice@gmail.com', telefone: '(14) 99889-1198' },
  ],
  cliente: {
    nome: 'Matheus',
    email: 'matheus.paice@gmail.com',
    telefone: '(14) 99889-1198',
  },
  carregando: false,
  erro: false,
};

/**
 * @description Reducer para verificar e manipular actions acionadas
 * @param {Object} state
 * @param {Object} action
 */
export const cliente = (state = initialState, action) => {
  switch (action.type) {
    case Types.NOVO_CLIENTE:
      return {
        clientes: [...state.clientes, action.data],
        cliente: action.data,
        carregando: false,
        erro: false,
      };
    default:
      return state;
  }
};

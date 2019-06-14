/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Action e Reducer cliente
 */

/**
 * @description Declaração de types do reducer
 */
export const Types = {
    CARREGAMENTO_NAO_INICIADO: '@carregamento/CARREGAMENTO_NAO_INICIADO',
    CARREGAMENTO_INICIADO: '@carregamento/CARREGAMENTO_INICIADO',
    CARREGAMENTO_SUCESSO: '@carregamento/CARREGAMENTO_SUCESSO',
    CARREGAMENTO_FALHA: '@carregamento/CARREGAMENTO_FALHA',

    USUARIO_NAO_INCIADO: '@usuario/USUARIO_NAO_INCIADO',
    USUARIO_INICIADO: '@usuario/USUARIO_INICIADO',
    USUARIO_SUCESSO: '@usuario/USUARIO_SUCESSO',
    USUARIO_FALHA: '@usuario/USUARIO_FALHA',
    ZERA_USUARIO: '@usuario/ZERA_USUARIO',

    REPOSITORIO_NAO_INCIADO: '@repositorio/REPOSITORIO_NAO_INCIADO',
    REPOSITORIO_INICIADO: '@repositorio/REPOSITORIO_INICIADO',
    REPOSITORIO_SUCESSO: '@repositorio/REPOSITORIO_SUCESSO',
    REPOSITORIO_FALHA: '@repositorio/REPOSITORIO_FALHA',

    EXIBIR_REPOSITORIO_NAO_INCIADO: '@repositorio/EXIBIR_REPOSITORIO_NAO_INCIADO',
    EXIBIR_REPOSITORIO_INICIADO: '@repositorio/EXIBIR_REPOSITORIO_INICIADO',
    EXIBIR_REPOSITORIO_SUCESSO: '@repositorio/EXIBIR_REPOSITORIO_SUCESSO',
    EXIBIR_REPOSITORIO_FALHA: '@repositorio/EXIBIR_REPOSITORIO_FALHA',
};

/**
 * @description Actions usuário
 */
export const Creators = {
    buscarUsuario: values => ({
        type: Types.CARREGAMENTO_INICIADO,
        data: values,
    }),
    exibirUsuario: id => ({
        type: Types.USUARIO_INICIADO,
        data: id,
    }),
    listarRepositorio: id => ({
        type: Types.REPOSITORIO_INICIADO,
        data: id,
    }),
    exibirRepositorio: (usuario, repositorio) => ({
        type: Types.EXIBIR_REPOSITORIO_INICIADO,
        data: {
            usuario,
            repositorio,
        },
    }),
    zeraUsuario: () => ({
        type: Types.ZERA_USUARIO,
    }),
};

/**
 * @description Dados iniciais do reducer usuário
 */
export const initialState = {
    usuario: {},
    usuarios: [],
    repositorio: {},
    repositorios: [],
    status: Types.CARREGAMENTO_NAO_INICIADO,
    carregando: false,
    erro: false,
};

/**
 * @description Reducer para verificar e manipular actions acionadas
 * @param {Object} state
 * @param {Object} action
 */
export const usuario = (state = initialState, action) => {
    switch (action.type) {
        /** REDUCER CARREGAMENTO */
        case Types.CARREGAMENTO_INICIADO:
            return Object.assign({}, state, {
                status: Types.CARREGAMENTO_INICIADO,
                carregando: true,
                erro: false,
            });
        case Types.CARREGAMENTO_SUCESSO:
            return Object.assign({}, state, {
                status: Types.CARREGAMENTO_SUCESSO,
                usuarios: action.data,
                carregando: false,
                erro: false,
            });
        case Types.CARREGAMENTO_FALHA:
            return Object.assign({}, state, {
                status: Types.CARREGAMENTO_FALHA,
                carregando: false,
                erro: true,
            });
        /** REDUCER USUARIO */
        case Types.USUARIO_INICIADO:
            return Object.assign({}, state, {
                status: Types.USUARIO_INICIADO,
                carregando: true,
                erro: false,
            });
        case Types.USUARIO_SUCESSO:
            return Object.assign({}, state, {
                status: Types.USUARIO_SUCESSO,
                usuario: action.data,
                carregando: false,
                erro: false,
            });
        case Types.USUARIO_FALHA:
            return Object.assign({}, state, {
                status: Types.USUARIO_FALHA,
                carregando: false,
                erro: true,
            });
        /** REDUCER REPOSITORIO */
        case Types.REPOSITORIO_INICIADO:
            return Object.assign({}, state, {
                status: Types.REPOSITORIO_INICIADO,
                carregando: true,
                erro: false,
            });
        case Types.REPOSITORIO_SUCESSO:
            return Object.assign({}, state, {
                status: Types.REPOSITORIO_SUCESSO,
                repositorios: action.data,
                carregando: false,
                erro: false,
            });
        case Types.REPOSITORIO_FALHA:
            return Object.assign({}, state, {
                status: Types.REPOSITORIO_FALHA,
                carregando: false,
                erro: true,
            });
        /** REDUCER EXIBIR REPOSITORIO */
        case Types.EXIBIR_REPOSITORIO_INICIADO:
            return Object.assign({}, state, {
                status: Types.EXIBIR_REPOSITORIO_INICIADO,
                carregando: true,
                erro: false,
            });
        case Types.EXIBIR_REPOSITORIO_SUCESSO:
            return Object.assign({}, state, {
                status: Types.EXIBIR_REPOSITORIO_SUCESSO,
                repositorio: action.data,
                carregando: false,
                erro: false,
            });
        case Types.EXIBIR_REPOSITORIO_FALHA:
            return Object.assign({}, state, {
                status: Types.EXIBIR_REPOSITORIO_FALHA,
                carregando: false,
                erro: true,
            });
        case Types.ZERA_USUARIO:
            return Object.assign({}, state, {
                status: Types.ZERA_USUARIO,
                usuarios: [],
                carregando: false,
                erro: false,
            });
        default:
            return state;
    }
};

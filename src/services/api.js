import axios from 'axios';
import { URLBASE } from '../config/config';

/**
 * @description Objeto padrão para requisições do sistema
 */
export const api = {
    /**
     * @description Função para pesquisar usuários
     * @param {string} caminho
     * @param {string} pesquisa
     */
    get: (caminho, pesquisa) => {
        return axios({
            method: 'get',
            url: `${URLBASE}/search/${caminho}?q=${pesquisa}`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.status !== 200) return false;

            return response.data;
        });
    },
    /**
     * @description Função para exibir um usuário
     * @param {string} id
     */
    getUsuario: id => {
        return axios({
            method: 'get',
            url: `${URLBASE}/users/${id}`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.status !== 200) return false;

            return response.data;
        });
    },
    /**
     * @description Função para exibir repositorios de um usuário
     * @param {string} id
     */
    getRepositorios: usuario => {
        return axios({
            method: 'get',
            url: `${URLBASE}/users/${usuario}/repos`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.status !== 200) return false;

            return response.data;
        });
    },
    /**
     * @description Função para exibir um repositorio do usuário
     * @param {string} usuario
     * @param {string} repositorio
     */
    getRepositorio: (usuario, repositorio) => {
        return axios({
            method: 'get',
            url: `${URLBASE}/repos/${usuario}/${repositorio}`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.status !== 200) return false;

            return response.data;
        });
    },
};

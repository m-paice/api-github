import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Pesquisar = styled.input`
    background: #fff;
    width: 350px;
    max-width: 600px;
    height: 50px;
    border: none;
    padding: 0 25px;
    border-radius: 25px 0 0 25px;
    font-size: 20px;
`;

export const BotaoPesquisar = styled.button`
    border-radius: 0 25px 25px 0;
    width: 150px;
    height: 50px;
    border: none;
    cursor: pointer;
    background: green;
    font-size: 20px;
    transition: 0.4s;

    &:hover {
        background: red;
    }
`;

export const ContainerLista = styled.ul`
    position: absolute;
    height: auto;
    width: 500px;
    margin-top: 20px;
    margin-bottom: 40px;
    list-style-type: none;
    a {
        text-decoration: none;
    }
`;

export const ItensLista = styled.li`
    border-radius: 20px 20px 20px 20px;
    width: 100%;
    margin-top: 5px;
    height: 30px;
    border: none;
    cursor: pointer;
    background: green;
    transition: 0.4s;

    &:hover {
        background: red;
    }
`;

export const TextoItem = styled.span`
    font-size: 20px;
    color: #000;
    padding-left: 20px;
    padding-top: 5px;
`;

export const ContainerPerfil = styled.div`
    position: absolute;
    top: 10%;
    left: 5%;
    /* transform: translate(-50%, -50%); */
`;
export const FotoPerfil = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

export const InformacaoPerfil = styled.div`
    position: absolute;
    left: 110%;
    top: 5%;
    width: 800px;
    font-size: 20px;
    color: #fff;
`;

export const StartComponent = styled.span`
    position: absolute;
    right: 20px;
`;

export const NomeUsuario = styled.h1`
    text-transform: uppercase;
`;

export const InfoPerfil = styled.div`
    margin-left: 100px;
    font-size: 25px;
    color: #fff;
`;

export const BotaoOrdenar = styled.button`
    padding: 5px;
    width: 150px;
    height: 30px;
    background: green;
    border: none;
    font-size: 15px;
    border-radius: 5px;
    /* position: absolute; */
    right: 0;
    color: white;
`;

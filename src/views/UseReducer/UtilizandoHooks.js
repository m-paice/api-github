/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Modelo de utilização do useReducer do React Hooks
 */

import React, { useReducer, useEffect } from 'react';

/**
 * @description Importação dos componentes utilizado pelo useReducer
 */
import {
  initialState, cliente, Creators as clienteActions,
} from '../../store/ducks/cliente';

/**
 * @description Função principal do componente
 */
const UtilizandoHooks = () => {
  const [state, dispatch] = useReducer(cliente, initialState);

  useEffect(() => {
    console.log('state: ', state);
  }, [state]);

  return (
    <div>
      <p> {`Nomes: ${state.clientes.map(v => v.nome)}`} </p>

      <button
        type="button"
        onClick={() => dispatch(clienteActions.novoCliente(
          'Rainã Pepe', 'raina.pepe@jbtec.com.br', '(14) 99889-1198',
        ))}
      > Novo
      </button>
    </div>
  );
};

export default UtilizandoHooks;

// const UtilizandoHook = () => {
//   const reducer = (state, action) => {
//     switch (action) {
//       case 'adicionar':
//         return { count: state.count + 1 };
//       case 'remover':
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <div> Count: {state.count} </div>

//       <button type="button" onClick={() => dispatch('adicionar')}> + </button>
//       <button type="button" onClick={() => dispatch('remover')}> - </button>
//     </div>

//   );
// };

// export default UtilizandoHook;

/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Modelo de utilização do useReducer do React Hooks
 */

import React, { useReducer, useEffect } from 'react';

/**
 * @description Importação dos componentes utilizado pelo useReducer
 */
import {
  initialState, cliente, novoCliente,
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
        onClick={() => dispatch(novoCliente(
          'Rainã Pepe', 'raina.pepe@jbtec.com.br', '(14) 99889-1198',
        ))}
      > Novo
      </button>
    </div>
  );
};

export default UtilizandoHooks;

// import React, { useReducer } from 'react';

// const UtilizandoHooks = () => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'ADD_COUNT':
//         return { count: state.count + 1 };
//       case 'REMOVE_COUNT':
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <p>{`Count: ${state.count}`}</p>
//       <button type="button" onClick={() => dispatch({ type: 'ADD_COUNT' })}> + </button>
//       <button type="button" onClick={() => dispatch({ type: 'REMOVE_COUNT' })}> - </button>
//     </div>
//   );
// };

// export default UtilizandoHooks;

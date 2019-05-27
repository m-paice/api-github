/**
* @author Matheus Paice <matheus.ferreira@jbtec.com.br>
* @description
*/

import React, { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}

      <hr />

      <button type="button" onClick={() => setCount(count + 1)}> somar 1 </button>
      <button type="button" onClick={() => setCount(count - 1)}> diminuir 1 </button>
    </div>
  );
};

export default State;

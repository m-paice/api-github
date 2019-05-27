import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [count, setCount] = useState(8);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}> somar 1 </button>
    </div>
  );
};

export default Effect;

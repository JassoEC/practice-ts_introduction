import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const handleValue = (numero: number) => setValue(value + numero);
  return (
    <>
      <h3>
        Counter <small>{value}</small>
      </h3>
      <button onClick={() => handleValue(1)} className="btn btn-primary me-3">
        +1
      </button>
      <button onClick={() => handleValue(-1)} className="btn btn-primary me-2">
        -1
      </button>
    </>
  );
};

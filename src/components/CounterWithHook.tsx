import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { handleValue, value } = useCounter(100);

  return (
    <>
      <h3>
        Counter with hook <small>{value}</small>
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

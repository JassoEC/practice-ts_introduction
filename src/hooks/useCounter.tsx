import { useState } from "react";

export const useCounter = (initialValue: number = 5) => {
  const [value, setValue] = useState(initialValue);
  const handleValue = (numero: number) => setValue(value + numero);

  return {
    handleValue,
    value,
  };
};

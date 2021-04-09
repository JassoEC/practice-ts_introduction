export const Functions = () => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <h3>{sumar(4, 89)}</h3>
    </>
  );
};

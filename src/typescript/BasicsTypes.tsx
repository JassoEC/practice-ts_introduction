export const BasicTypes = () => {
  const nombre: string = "Emanuel";
  const edad: number = 27;
  const activo: boolean = true;

  const poderes: string[] = ["velocidad", "volar", "respirar en el agua"];

  return (
    <>
      <h3>Tipos basicos</h3>
      <h4>{nombre}</h4>
      <h4>{edad}</h4>
      <h4>{JSON.stringify(activo)}</h4>
      {poderes.join(", ")}
    </>
  );
};

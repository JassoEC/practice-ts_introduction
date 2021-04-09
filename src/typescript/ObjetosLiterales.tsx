interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  numero: number;
  calle: string;
}

export const LiteralObjects = () => {
  const persona: Persona = {
    nombre: "Emanuel",
    edad: 27,
    direccion: {
      pais: "Mexico",
      numero: 15,
      calle: "Chapala",
    },
  };
  return (
    <>
      <h4>Objetos litreales</h4>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at } = entrada;

  return (
    <article>
      <h1>{titulo}</h1>
    </article>
  );
};

export default Entrada;

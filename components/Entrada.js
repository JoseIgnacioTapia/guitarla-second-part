import Link from 'next/link';
import { formatearFecha } from '../helpers/index';

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at, id } = entrada;

  return (
    <article>
      <h1>{titulo}</h1>
      <p>{formatearFecha(published_at)}</p>
      <p>{resumen}</p>
      <Link href={`/blog/${id}`}>Leer Entrada</Link>
    </article>
  );
};

export default Entrada;

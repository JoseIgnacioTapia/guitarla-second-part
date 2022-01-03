import Image from 'next/image';
import Link from 'next/link';

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, nombre, precio, url } = guitarra;

  return (
    <div>
      <Image
        layout="responsive"
        width={500}
        height={350}
        src={imagen.url}
        alt={`Imagen guitarra ${nombre}`}
      />
      <div>
        <h3>{nombre}</h3>
        <p>{precio}</p>
        <p>{descripcion}</p>
        <Link href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  );
};

export default Guitarra;

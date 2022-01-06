import Layout from '../../components/Layout';
import Image from 'next/image';
import { formatearFecha } from '../../helpers/index';
import styles from '../../styles/Entrada.module.css';

const EntradaBlog = ({ entrada }) => {
  const { contenido, imagen, published_at, titulo } = entrada;

  return (
    <Layout pagina={titulo}>
      <main>
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={imagen.url}
            alt={`Imagen entrada ${titulo}`}
          />
          <div className={styles.contenido}>
            <p>{formatearFecha(published_at)}</p>
            <p className="texto">{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  const paths = entradas.map(entrada => ({
    params: { url: entrada.url },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  console.log(entrada);

  return {
    props: {
      entrada: entrada[0],
    },
  };
}

// export async function getServerSideProps({ query: { id } }) {
//   const url = `${process.env.API_URL}/blogs/${id}`;
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();
//   console.log(entrada);

//   return {
//     props: {
//       entrada: entrada,
//     },
//   };
// }

export default EntradaBlog;

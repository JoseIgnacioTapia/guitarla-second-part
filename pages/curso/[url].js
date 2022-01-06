import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from '../../styles/Guitarra.module.css';
import { formatearFecha } from '../../helpers';

const DetalleCurso = ({ curso }) => {
  const { titulo, descripcion, inicio, fin, costo, imagen } = curso[0];
  console.log(curso[0]);

  return (
    <Layout pagina={titulo}>
      <main>
        <h2 className="heading">{titulo}</h2>
        <div className={styles.guitarra}>
          <div className={styles.imagen}>
            <Image
              layout="responsive"
              width={400}
              height={400}
              src={imagen[0].url}
              alt={`Imagen entrada ${titulo}`}
            />
          </div>
          <div>
            <h3 className={styles.title}>{titulo}</h3>
            <p>
              Inicia <time>{formatearFecha(inicio)}</time> | Finaliza{' '}
              <time>{formatearFecha(fin)}</time>
            </p>
            <p className="texto">{descripcion}</p>
            <p className={styles.precio}>${costo}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlCurso = `${process.env.API_URL}/lista-cursos?url=${url}`;
  const respuesta = await fetch(urlCurso);
  const curso = await respuesta.json();

  console.log(curso);

  return {
    props: {
      curso,
    },
  };
}

export default DetalleCurso;

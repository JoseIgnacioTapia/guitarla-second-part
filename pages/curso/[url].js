import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from '../../styles/Entrada.module.css';

const DetalleCurso = ({ curso }) => {
  const { titulo, descripcion, inicio, fin, costo, imagen } = curso[0];
  console.log(curso[0]);

  return (
    <Layout>
      <main>
        <h2 className="heading">{titulo}</h2>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={600}
            height={400}
            src={imagen[0].url}
            alt={`Imagen entrada ${titulo}`}
          />
        </article>
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

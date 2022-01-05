import Link from 'next/link';
import styles from '../styles/Curso.module.css';

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen, url } = curso;

  return (
    <section className={styles.curso}>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>

          <Link href={`/curso/${url}`}>
            <a className={styles.enlace}>Más Información</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 18rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${imagen[0].url});
            background-size: cover;
            background-position: 50%;
          }
        `}
      </style>
    </section>
  );
};

export default Curso;

import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, odio quisquam voluptatum ipsum aperiam numquam ex
              perspiciatis cupiditate beatae est reprehenderit libero, expedita
              veniam debitis sapiente unde reiciendis. Expedita ad voluptatibus
              quos sapiente enim optio recusandae numquam, dignissimos, voluptas
              necessitatibus qui illo iste fuga ratione rerum reiciendis sequi
              impedit minima!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, odio quisquam voluptatum ipsum aperiam numquam ex
              perspiciatis cupiditate beatae est reprehenderit libero, expedita
              veniam debitis sapiente unde reiciendis. Expedita ad voluptatibus
              quos sapiente enim optio recusandae numquam, dignissimos, voluptas
              necessitatibus qui illo iste fuga ratione rerum reiciendis sequi
              impedit minima!
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;

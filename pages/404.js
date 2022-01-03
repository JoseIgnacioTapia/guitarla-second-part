import Link from 'next/link';
import styles from '../styles/NoEncontrada.module.css';

const NoEncontrada = () => {
  return (
    <div className={styles.no_encontrado}>
      <h1 className="heading">Página no Encontrada</h1>

      <Link href="/">Volver al Inicio</Link>
    </div>
  );
};

export default NoEncontrada;

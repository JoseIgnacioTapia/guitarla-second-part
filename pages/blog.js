import Entrada from '../components/Entrada';
import Layout from '../components/Layout';

const blog = ({ entradas }) => {
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <h2 className="heading">Blogs</h2>

        <div>
          {entradas.map(entrada => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = 'http://localhost:1337/blogs';
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas,
    },
  };
}

export default blog;

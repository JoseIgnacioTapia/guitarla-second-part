import Layout from '../components/Layout';

const blog = ({ entradas }) => {
  console.log(entradas);

  return (
    <Layout pagina="Blog">
      <h1>Desde Blog</h1>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = 'http://localhost:1337/blogs';
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  console.log(entradas);

  return {
    props: {
      entradas,
    },
  };
}

export default blog;

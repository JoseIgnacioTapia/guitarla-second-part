import Layout from '../components/Layout';

const Tienda = ({ guitarras }) => {
  console.log(guitarras);

  return (
    <Layout pagina="Tienda Virtual">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colleción</h1>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();

  console.log(guitarras);

  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;

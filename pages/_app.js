import { useState } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [carrito, setCarritos] = useState([]);

  const agregarCarrito = producto => {
    setCarritos([...carrito, producto]);
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
    />
  );
}

export default MyApp;

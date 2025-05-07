import { useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);

  return <Component {...pageProps} products={products} setProducts={setProducts} />;
}

export default MyApp;

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NovoProduto({ products = [], setProducts }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!Array.isArray(products)) {
      console.warn('products prop is not an array, initializing as empty array');
    }
  }, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || price === '') {
      alert('Preencha todos os campos.');
      return;
    }

    setProducts([...(products || []), { name, price }]);
    router.push('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastrar Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Preço:</label><br />
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Cadastrar</button>
      </form>
    </div>
  );
}

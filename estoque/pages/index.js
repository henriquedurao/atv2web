import Link from 'next/link';

export default function Home({ products = [] }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Catálogo de Produtos</h1>
      <Link href="/novo-produto">
        <button style={{ marginBottom: '20px' }}>Adicionar Produto</button>
      </Link>
      {products.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - R$ {Number(product.price).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

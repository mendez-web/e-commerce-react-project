import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShoPinas</h1>
        <p className="home-subtitle">Satisfy your product needs fast</p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

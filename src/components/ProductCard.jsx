import { Link } from "react-router-dom";
const ProductCard = ({ name, price, image, id }) => {
  return (
    <div className="product-card">
      <img src={image} className="product-card-image" alt={name} />
      <div className="product-card-content">
        <h3 className="product-card-name">{name}</h3>
        <p className="product-card-price">P{price}</p>
      </div>
      <div className="product-card-actions">
        <Link className="btn btn-secondary" to={`/products/${id}`}>
          View Details
        </Link>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

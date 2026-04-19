import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const ProductCard = ({ name, price, image, id }) => {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find(item => item.id === id);
  const productQuantityLabel = productInCart 
  ? `(${productInCart.quantity})` 
  : "";
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
        <button className="btn btn-primary" onClick={() => addToCart(id)}>
          Add to Cart {productQuantityLabel}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

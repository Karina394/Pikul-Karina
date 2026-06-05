import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
    return (
        <div>
            <h3>{product.title}</h3>

            <p>Категорія: {product.category}</p>

            <p>Ціна: {product.price} грн</p>

            <Link to={`/products/${product.id}`}>
                Детальніше
            </Link>

            <br />

            <button
                onClick={() => onDelete(product.id)}
            >
                Видалити
            </button>
        </div>
    );
}

export default ProductCard;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] =
        useState(null);

    useEffect(() => {
        fetch(
            `http://localhost:3001/products/${id}`
        )
            .then((response) =>
                response.json()
            )
            .then((data) =>
                setProduct(data)
            );
    }, [id]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>{product.title}</h2>

            <p>
                Категорія:
                {product.category}
            </p>

            <p>
                Ціна:
                {product.price}
                грн
            </p>

            <p>
                {product.description}
            </p>
        </div>
    );
}

export default ProductDetails;
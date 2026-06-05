import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =
        useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);

        fetch(
            "http://localhost:3001/products"
        )
            .then((response) =>
                response.json()
            )
            .then((data) => {
                setProducts(data);
                setError("");
            })
            .catch(() => {
                setError(
                    "Помилка завантаження"
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const deleteProduct = (id) => {
        fetch(
            `http://localhost:3001/products/${id}`,
            {
                method: "DELETE",
            }
        ).then(() => {
            setProducts(
                products.filter(
                    (product) =>
                        product.id !== id
                )
            );
        });
    };

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h2>Список товарів</h2>

            <ProductList
                products={products}
                onDelete={deleteProduct}
            />
        </div>
    );
}

export default Products;
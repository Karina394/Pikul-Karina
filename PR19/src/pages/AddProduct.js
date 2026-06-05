import ProductForm from "../components/ProductForm";

function AddProduct() {
    const addProduct = (product) => {
        fetch(
            "http://localhost:3001/products",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify(product),
            }
        );
    };

    return (
        <div>
            <h2>Додати товар</h2>

            <ProductForm
                onAdd={addProduct}
            />
        </div>
    );
}

export default AddProduct;
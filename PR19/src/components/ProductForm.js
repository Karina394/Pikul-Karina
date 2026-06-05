import { useState } from "react";

function ProductForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] =
        useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !title ||
            !category ||
            !price ||
            !description
        ) {
            alert("Заповніть всі поля");
            return;
        }

        onAdd({
            title,
            category,
            price,
            description,
        });

        setTitle("");
        setCategory("");
        setPrice("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Назва"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />

            <input
                placeholder="Категорія"
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value)
                }
            />

            <input
                placeholder="Ціна"
                value={price}
                onChange={(e) =>
                    setPrice(e.target.value)
                }
            />

            <textarea
                placeholder="Опис"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
            />

            <button type="submit">
                Додати товар
            </button>
        </form>
    );
}

export default ProductForm;
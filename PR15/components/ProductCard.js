function ProductCard(props) {
    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px",
                width: "250px"
            }}
        >
            <h2>{props.title}</h2>
            <p>Ціна: {props.price} грн</p>
            <p>Категорія: {props.category}</p>
        </div>
    );
}

export default ProductCard;
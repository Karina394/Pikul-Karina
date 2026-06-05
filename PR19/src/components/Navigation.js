import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Головна</Link> |{" "}
            <Link to="/products">Товари</Link> |{" "}
            <Link to="/products/add">Додати товар</Link>
        </nav>
    );
}

export default Navigation;
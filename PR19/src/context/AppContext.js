import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [products, setProducts] = useState([]);

    return (
        <AppContext.Provider
            value={{ products, setProducts }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
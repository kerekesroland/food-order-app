import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import "./App.css";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { CartProvider } from "./store/Cart-Context";
const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const toggleCart = () => {
        setCartIsShown(!cartIsShown);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart toggleCart={toggleCart} />}
            <Header toggleCart={toggleCart} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
};

export default App;

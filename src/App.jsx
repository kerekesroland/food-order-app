import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import "./App.css";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const toggleCart = () => {
        setCartIsShown(!cartIsShown);
    };

    return (
        <>
            {cartIsShown && <Cart toggleCart={toggleCart} />}
            <Header toggleCart={toggleCart} />
            <main>
                <Meals />
            </main>
        </>
    );
};

export default App;

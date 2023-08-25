import style from "./ShoppingCart.module.css"
import { BsFillTrash3Fill } from "react-icons/bs"
import { useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";

const { VITE_SERVER_URL } = import.meta.env;

export const ShoppingCart = () => {
    const authData  = useSelector((state) => state.authData);
    const [paymentData, setPaymentData] = useState({
        userId   : authData?.id || null, //!DEBO traer el id del user ME falta
        products : JSON.parse(localStorage.getItem('cartProducts')) || [],
    })

    let subTotal    = 0;
    
    const shopping = async () => {
        console.log(paymentData);
        try {
            const { data } = await axios.post(`${VITE_SERVER_URL}/orders`, paymentData);
            window.location.href = data;
            console.log();
        } catch (error) {
            alert("error: " + error)
        }
    }

    const handleQuantityChange = (productId, action) => {
        const updatedProducts = paymentData.products.map(product => {
            if (product.id === productId) {
                const newQuantity = action === 'add' ? product.quantity + 1 : Math.max(product.quantity - 1, 1);
                return { ...product, quantity: newQuantity };
            }
            return product;
        });

        setPaymentData(prevData => ({
            ...prevData,
            products: updatedProducts,
        }));
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    };

    const handleRemoveItem = (productId) => {
        const updatedProducts = paymentData.products.filter(product => product.id !== productId);
        setPaymentData(prevData => ({
            ...prevData,
            products: updatedProducts,
        }));
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    };

    const handleRemoveAll = () => {
        setPaymentData(prevData => ({
            ...prevData,
            products: [],
        }));
        localStorage.removeItem('cartProducts');
    };

    return (
        <div className={style.cart}>
            <div className={style.cartContainer}>
                <div className={style.header}>
                    <h1>Shopping Cart</h1>
                    <h2 onClick={handleRemoveAll}>Remove All</h2>
                </div>
                

                {paymentData.products?.map(product => 
                    <div key = { product.id } className={style.cartLine}>
                        <img src={product.picture_url} alt=""/>
                        <div  className={style.cartTitCon}> { product.title } </div>
                        <div>
                            <button onClick={() => handleQuantityChange(product.id, 'subtract')}>-</button>
                            {product.quantity}
                            <button onClick={() => handleQuantityChange(product.id, 'add')}>+</button>
                        </div>
                        <div> 
                            { product.unit_price.toFixed(2) }
                            <span className={style.removeItem}  onClick={() => handleRemoveItem(product.id)}>
                                <BsFillTrash3Fill/>
                            </span>
                        </div>
                    </div>
                )}

                {!paymentData.products.length && <div> You don't have any products in your shopping cart</div>}

                <div className={style.totalPrice}>
                    Sub Total : $
                    {subTotal = paymentData.products.reduce((total, product) => total + (product.unit_price * product.quantity), 0).toFixed(2)}
                    <button 
                    disabled={!authData?.id}
                    onClick={() => shopping()}>CheckOut</button>
                </div>

            </div>
        </div>
    )
}

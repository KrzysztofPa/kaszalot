import React, { useEffect, useState } from "react";
import './Cart.styles.css';
import { BuyButton } from "../Product/Product.style";
import { CenteredContainer, OrderButton } from "./Cart.style";

interface ProductData {
    id: string;
    name: string;
    url: string;
    description: string;
    price: number;
    quantity: number; // Dodana ilość produktów
}

export const Cart = (): JSX.Element => {
    const [cartData, setCartData] = useState<ProductData[]>([]);

    useEffect(() => {
        const storedData = localStorage.getItem('cart');

        if (storedData) {
            const parsedData: ProductData[] = JSON.parse(storedData);
            setCartData(parsedData);
        }
    }, []);

    function deleteProduct(productId: string) {
        const updatedProducts = cartData.filter(product => product.id !== productId);

        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        setCartData(updatedProducts);
    }

    const updateQuantity = (productId: string, newQuantity: number) => {
        const updatedProducts = cartData.map(product =>
            product.id === productId ? { ...product, quantity: newQuantity } : product
        );

        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        setCartData(updatedProducts);
    };

    if (cartData.length === 0) {
        return (
            <div style={{minHeight: '60vh'}}>
                <h2>Twój koszyk</h2>
                <p>Nic tutaj nie ma, dodaj produkty</p>
            </div>
        );
    }

    return (
        <div style={{minHeight: '60vh'}}>
            <h2>Twój koszyk</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Zdjęcie</th>
                        <th>Nazwa</th>
                        <th>Cena</th>
                        <th>Ilość</th>
                        <th>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((product) => (
                        <tr key={product.id}>
                            <td><img src={product.url} alt={product.name} style={{ width: '100px', height: '100px' }} /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <input
                                    type="number"
                                    value={product.quantity}
                                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))}
                                />
                            </td>
                            <td><button onClick={() => deleteProduct(product.id)}>Usuń</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <CenteredContainer>
                <OrderButton>Zamów</OrderButton>
            </CenteredContainer>
  
        </div>
    );
};

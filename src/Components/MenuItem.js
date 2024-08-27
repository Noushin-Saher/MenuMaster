import React from 'react';

const MenuItem = ({ itemId, itemName, price, quantity, updateCart }) => {
    const handleQuantityChange = (e) => {
        updateCart(itemId, e.target.value);
    };

    return (
        <div className="menu-item">
            <h3>{itemName}</h3>
            <p>Price: {price}/-</p>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="0"
            />
        </div>
    );
};

export default MenuItem;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './YummyOrders.css'; // Make sure to create and style this CSS file as needed

export default function YummyOrders(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

      const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost/MiniProject/get_orders.php', { params: { stall_name: props.stallName } });
            setOrders(response.data);
        } catch (error) {
            console.error('There was an error fetching the orders!', error);
        }
      };

        fetchOrders();
    }, [props.stallName]);

    

    return (
        <div className="orders-container">
            <h2>Orders for {props.stallName}</h2>
            {orders.length > 0 ? (
                [...orders].reverse().map(order => (
                    <div key={order.order_id} className="order-card">
                        <h3>Order ID: {order.order_id}</h3>
                        <p><strong>Stall Name:</strong> {order.stall_name}</p>
                        <p><strong>Order Date:</strong> {order.order_date}</p>
                        <div className="order-items">
                            <h4>Items:</h4>
                            {JSON.parse(order.items_list).map((item, index) => (
                                <div key={item} className="order-item">
                                    <p><strong>Item:</strong> {item}</p>
                                    <p><strong>Quantity:</strong> {JSON.parse(order.quantity_list)[index]}</p>
                                    <p><strong>Price:</strong> {parseFloat(JSON.parse(order.price_list)[index]).toFixed(2)}/-</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No orders available.</p>
            )}
        </div>
    );
}

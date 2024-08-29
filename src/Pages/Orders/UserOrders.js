import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import RegNoContext from '../../Components/RegNoContext';
import './UserOrders.css'; 
import Navbar from '../../Components/Navbar'

export default function UserOrders() {
    const [orders, setOrders] = useState([]);
    const { regNo } = useContext(RegNoContext); // Use the context to get the regNo

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost/MiniProject/get_orders.php', { params: { reg_no: regNo } });
                setOrders(response.data);
            } catch (error) {
                console.error('There was an error fetching the orders!', error);
            }
        };

        if (regNo) { // Only fetch orders if regNo is available
            fetchOrders();
        }
    }, [regNo]);

    const calculateTotalPrice = (priceList) => {
        return priceList.reduce((total, price) => total + parseFloat(price), 0).toFixed(2);
    };

    return (
        <div className="container orders-container">
            <Navbar/>
            <h2>Your Orders</h2>
            {orders.length > 0 ? (
                <div className="row">
                    {[...orders].reverse().map(order => {
                        const items = JSON.parse(order.items_list);
                        const quantities = JSON.parse(order.quantity_list);
                        const prices = JSON.parse(order.price_list);
                        const totalPrice = calculateTotalPrice(prices);

                        return (
                            <div key={order.order_id} className="col-md-6">
                            <div className="order-card">
                                <h3>Order ID: {order.order_id}</h3>
                                <p><strong>Stall Name:</strong> {order.stall_name}</p>
                                <p><strong>Order Date:</strong> {order.order_date}</p>
                                <div>
                                    <h4>Items:</h4>
                                    <table className="order-table">
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item}</td>
                                                    <td>{quantities[index]}</td>
                                                    <td>{parseFloat(prices[index]).toFixed(2)} /-</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="total-price"><strong>Total Price: {totalPrice}/-</strong></p>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            ) : (
                <p>You have no orders.</p>
            )}
        </div>
    );
}
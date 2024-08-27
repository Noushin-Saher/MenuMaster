import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Pages/Menu/Menu';
import CartPage from './Pages/Cart/Cart';
import AdminHome from './Pages/Admin/AdminHome';
import UserOrders from './Pages/Orders/UserOrders';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Restaurants from './Pages/Restaurants/Restaurants';
import { RegNoProvider } from './Components/RegNoContext'; 
import Layout from './Components/Layout';
import Main from './Main';

function App() {
    return (
        <RegNoProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/menu" element={<Layout><Menu /></Layout>} />
                    <Route path="/cart" element={<Layout><CartPage /></Layout>} />
                    <Route path="/adminHome" element={<AdminHome />} />
                    <Route path="/userOrders" element={<Layout><UserOrders /></Layout>} />
                    <Route path="/home" element={<Layout><Home /></Layout>} />
                    <Route path="/restaurants" element={<Layout><Restaurants /></Layout>} />
                </Routes>
            </Router>
        </RegNoProvider>
    );
}

export default App;

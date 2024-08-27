// src/Components/Layout.js
import React from 'react';
 // Ensure the path is correct
import Navbar from './Navbar'; // Ensure the path is correct

function Layout({ children }) {
    return (
        <div>
            {/* Render the Banner only if needed */}
            
            {/* Render the content of the route */}
            {children}
            {/* Render the Navbar */}
            <Navbar />
        </div>
    );
}

export default Layout;
 
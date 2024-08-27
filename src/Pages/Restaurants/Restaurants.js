import React, { useState, useContext } from 'react';
import Navbar from '../../Components/Navbar';
import SearchBar from '../../Components/SearchBar';
import RestaurantCard from '../../Components/RestaurantCard';
import restaurant1 from '../../Images/Screenshot.png';
import restaurant6 from '../../Images/Screenshot.png';
import './Restaurants.css';
import RegNoContext from '../../Components/RegNoContext'; // Adjust the path as needed
import Banner from '../../Components/banner'

function Restaurants() {
  const [searchQuery, setSearchQuery] = useState('');
  const { regNo } = useContext(RegNoContext); // Get regNo from context

  const restaurants = [
    { image: restaurant1, name: 'Yummy', cuisine: 'Italian, Pizza, Pasta', rating: 4.5 },
    { image: restaurant6, name: 'Dominos', cuisine: 'Juices, Beverages', rating: 4.5 },
  ];

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Home">
      <Navbar />
      <Banner />
      <main>
        <SearchBar searchValue={searchQuery} onSearchChange={setSearchQuery} />
        <h2 className="section-heading">Featured Stalls</h2>
        <RestaurantCard restaurants={filteredRestaurants} regNo={regNo} /> {/* Use regNo here */}
      </main>
    </div>
  );
}

export default Restaurants;

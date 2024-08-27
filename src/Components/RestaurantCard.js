import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantCard.css';

function RestaurantCard({ restaurants, regNo }) {
  const navigate = useNavigate();

  const handleViewMenu = (restaurant) => {
    navigate('/Menu', {
      state: {
        stallName: restaurant.name,
      },
    });
  };

  return (
    <section className="featured-restaurants">
      {restaurants.map((restaurant, index) => (
        <div className="restaurant-card" key={index}>
          <img src={restaurant.image} alt={restaurant.name} />
          <h3>{restaurant.name}</h3>
          <p>Rating: {restaurant.rating}</p>
          <button onClick={() => handleViewMenu(restaurant)}>View Menu</button>
        </div>
      ))}
    </section>
  );
}

export default RestaurantCard;


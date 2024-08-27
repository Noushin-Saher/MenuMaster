import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseMeals,
      title: "Select Your Favorite Stall",
      text: "Choose your favorite stall from our list of options, based on your preference or craving.",
    },
    {
      image: PickMeals,
      title: "Order Your Food",
      text: "Order your desired food items from the selected stall. Specify the quantity and any special instructions for preparation.",
    },
    {
      image: DeliveryMeals,
      title: "Generate Receipt",
      text: "Once your order is placed, a receipt is generated instantly. This receipt contains your order details, ensuring a smooth and efficient process.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        This application allows you to pre-order your food from your favorite stalls in college. Simply select your preferred stall, place your order, and receive a receipt. The menu is updated regularly based on availability, making it a time-saving and efficient process for everyone.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div style={{ height: "200px" }}></div> 
    </div>
  );
};

export default Work;

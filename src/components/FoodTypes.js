import React from "react";

export default function FoodTypes({ showData }) {
  return (
    <div className="food-list">
      <h2>Categories </h2>
      <div className="categorie-box">
        <button onClick={showData.showAllData} className="categorie-btn">
          All
        </button>
        <button onClick={showData.showBreakfast} className="categorie-btn">
          Breakfast
        </button>
        <button onClick={showData.showLunchData} className="categorie-btn">
          Lunch
        </button>
        <button onClick={showData.showDinnerData} className="categorie-btn">
          Dinner
        </button>
      </div>
    </div>
  );
}

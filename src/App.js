import "./App.css";
import React, { useEffect, useState } from "react";
import { BreakfastData } from "./components/MealData";
import { LunchData } from "./components/MealData";
import { DinnerData } from "./components/MealData";
import FoodTypes from "./components/FoodTypes";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  let arr = [1, 2, 3, 4, 5, 6];

  arr.sort(() => Math.random() - 0.5);
  const AllData = [...BreakfastData, ...DinnerData, ...LunchData];
  let randomArray = AllData;
  randomArray.sort(() => Math.random() - Math.random()); //if a - b > 0 return a else b

  const [Data, setData] = useState(AllData);
  const [searchReset, setSignal] = useState("no");

  useEffect(() => {
    setData(randomArray);
  }, []);

  const showAllData = () => {
    setData(randomArray);
    setSignal("yes");
  };

  const showBreakfast = () => {
    setData(BreakfastData);
    setSignal("yes");
  };

  const showLunchData = () => {
    setData(LunchData);
    setSignal("yes");
  };

  const showDinnerData = () => {
    setData(DinnerData);
    setSignal("yes");
  };

  const ShowsearchData = (Inputdata) => {
    let newArray = AllData.filter((item) => {
      return item.mealTitle === Inputdata;
    });
    setData(newArray);
    setSignal("no");
  };

  return (
    <div className="App">
      <Header searchData={ShowsearchData} signal={searchReset} />
      <FoodTypes
        showData={{ showAllData, showBreakfast, showLunchData, showDinnerData }}
      />
      {Data.length ? (
        <MainContent data={Data} />
      ) : (
        <div className="main-content">
          <h2>No Data Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const SelectMeal = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("random");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    // Call the API whenever there's a change in selected parameters
    if (
      (selectedOption !== "random" &&
        selectedOption !== "" &&
        selectedOption === "region" &&
        selectedRegion !== "") ||
      (selectedOption === "category" && selectedCategory !== "")
    ) {
      fetchMealData();
    }
  }, [selectedOption, selectedRegion, selectedCategory]);

  const fetchMealData = async () => {
    try {
      let mealApiUrl = "";

      // Determine the API URL based on the selected option
      switch (selectedOption) {
        case "random":
          mealApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
          break;
        case "region":
          mealApiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedRegion}`;
          break;
        case "category":
          mealApiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
          break;
        default:
          break;
      }

      setMealData(null);

      const response = await axios.get(mealApiUrl);

      if (response.data.meals && response.data.meals.length > 0) {
        let randomMeal;
        if (selectedOption === "region" || selectedOption === "category") {
          const meals = response.data.meals;
          randomMeal = meals[Math.floor(Math.random() * meals.length)];
        } else {
          randomMeal = response.data.meals[0];
        }

        setMealData(randomMeal);
        onSelect(randomMeal);
      } else {
        console.error("No meals found in response data");
      }
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  return (
    <View>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        <Picker.Item label="Generate Random" value="random" />
        <Picker.Item label="Select by Region" value="region" />
        <Picker.Item label="Select by Category" value="category" />
      </Picker>
      {selectedOption === "region" && (
        <Picker
          selectedValue={selectedRegion}
          onValueChange={(itemValue) => {
            setSelectedRegion(itemValue);
          }}
        >
          <Picker.Item label="Choose" value="/" />
          <Picker.Item label="American" value="American" />
          <Picker.Item label="British" value="British" />
          <Picker.Item label="Chinese" value="Chinese" />
        </Picker>
      )}
      {selectedOption === "category" && (
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => {
            setSelectedCategory(itemValue);
          }}
        >
          <Picker.Item label="Choose" value="/" />
          <Picker.Item label="Beef" value="Beef" />
          <Picker.Item label="Chicken" value="Chicken" />
          <Picker.Item label="Beef" value="Beef" />
        </Picker>
      )}
    </View>
  );
};

export default SelectMeal;

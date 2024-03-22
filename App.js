import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import SelectMeal from "./components/SelectMeal";
import SelectDrink from "./components/SelectDrink";
import Button from "./components/Button";
import ViewDate from "./components/ViewDate";
import axios from "axios";

export default function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [mealParams, setMealParams] = useState({
    option: "random",
    region: "",
    category: "",
  });

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  const handleDrinkSelect = (drink) => {
    setSelectedDrink(drink);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleParamsChange = (option, region, category) => {
    setMealParams({ option, region, category });
  };

  const handleGenerateDate = async () => {
    console.log("Generating date..."); // Added console log statement for debugging
    try {
      let mealApiUrl = "";

      switch (mealParams.option) {
        case "random":
          mealApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
          break;
        case "region":
          mealApiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealParams.region}`;
          break;
        case "category":
          mealApiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealParams.category}`;
          break;
        default:
          break;
      }

      const response = await axios.get(mealApiUrl);

      if (response.data.meals && response.data.meals.length > 0) {
        let randomMeal;
        if (
          mealParams.option === "region" ||
          mealParams.option === "category"
        ) {
          const meals = response.data.meals;
          randomMeal = meals[Math.floor(Math.random() * meals.length)];
        } else {
          randomMeal = response.data.meals[0];
        }

        setSelectedMeal(randomMeal);
      } else {
        console.error("No meals found in response data");
      }
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  return (
    <View style={styles.container}>
      <SelectMeal
        onSelect={handleMealSelect}
        onParamsChange={handleParamsChange}
      />
      <SelectDrink onSelect={handleDrinkSelect} />

      <View style={styles.footerContainer}>
        <Button label="Generate Date" onPress={handleGenerateDate} />
      </View>
      {selectedMeal && <ViewDate meal={selectedMeal} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

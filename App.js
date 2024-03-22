import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import SelectMeal from "./components/SelectMeal";
// import SelectDrink from "./components/SelectDrink";
import Button from "./components/Button";
import ViewDate from "./components/ViewDate";
import axios from "axios";

export default function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  // const [selectedDrink, setSelectedDrink] = useState(null);
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const [mealParams, setMealParams] = useState({
    option: "random",
    region: "",
    category: "",
  });

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  // const handleDrinkSelect = (drink) => {
  //   setSelectedDrink(drink);
  // };

  // const handleMovieSelect = (movie) => {
  //   setSelectedMovie(movie);
  // };

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
      <View style={styles.content}>
        <SelectMeal
          onSelect={handleMealSelect}
          onParamsChange={handleParamsChange}
        />
      </View>

      <View style={styles.content}>
        <Button label="Generate Date" onPress={handleGenerateDate} />
      </View>

      {selectedMeal && (
        <View style={styles.content}>
          <ViewDate meal={selectedMeal} />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#450920",
    padding: 20,
  },
  content: {
    marginTop: 30,
    marginBottom: 20,
  },
});

// darkest - 450920;
// dark - a53860;
// medium - da627d;
// light - ffa5ab;
// lightest - f9dbbd;

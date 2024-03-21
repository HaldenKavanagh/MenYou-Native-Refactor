import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import SelectMeal from "./components/SelectMeal";
import SelectDrink from "./components/SelectDrink";
import Button from "./components/Button";
import ViewDate from "./components/ViewDate";

export default function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  const handleDrinkSelect = (drink) => {
    setSelectedDrink(drink);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleGenerateDate = () => {
    // Here you can implement logic to combine the selected parameters
    // and generate a date based on them, e.g., fetching data for meal, drink, and movie
    // based on the selected parameters.
    console.log("Selected Meal:", selectedMeal);
    console.log("Selected Drink:", selectedDrink);
    console.log("Selected Movie:", selectedMovie);
  };

  return (
    <View style={styles.container}>
      <SelectMeal onSelect={handleMealSelect} />
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

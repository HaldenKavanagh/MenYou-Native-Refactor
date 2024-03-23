import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import SelectMeal from "./components/SelectMeal";
import SelectDrink from "./components/SelectDrink";
import Button from "./components/Button";
import ViewDate from "./components/ViewDate";
import axios from "axios";

export default function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);

  const [mealParams, setMealParams] = useState({
    option: "random",
    region: "",
    category: "",
  });
  const [drinkParams, setDrinkParams] = useState({
    option: "random",
    ingredient: "",
    category: "",
  });

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  const handleDrinkSelect = (drink) => {
    setSelectedDrink(drink);
  };

  const handleMealParamsChange = (option, region, category) => {
    setMealParams({ option, region, category });
  };

  const handleDrinkParamsChange = (option, ingredient, category) => {
    setDrinkParams({ option, ingredient, category });
  };

  const handleGenerateDate = async () => {
    console.log("Generating date...");
    try {
      let mealApiUrl = "";
      let drinkApiUrl = "";

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

      switch (drinkParams.option) {
        case "random":
          drinkApiUrl =
            "https://www.thecocktaildb.com/api/json/v1/1/random.php";
          break;
        case "ingredient":
          drinkApiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkParams.ingredient}`;
          break;
        case "category":
          drinkApiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkParams.category}`;
          break;
        default:
          break;
      }

      console.log("Drink API URL:", drinkApiUrl);

      const mealResponse = await axios.get(mealApiUrl);
      const drinkResponse = await axios.get(drinkApiUrl);
      console.log(drinkResponse);

      if (mealResponse.data.meals && mealResponse.data.meals.length > 0) {
        let randomMeal;
        if (
          mealParams.option === "region" ||
          mealParams.option === "category"
        ) {
          const meals = mealResponse.data.meals;
          randomMeal = meals[Math.floor(Math.random() * meals.length)];
        } else {
          randomMeal = mealResponse.data.meals[0];
        }

        setSelectedMeal(randomMeal);
      } else {
        console.error("No meals found in response data");
      }

      if (drinkResponse.data.drinks && drinkResponse.data.drinks.length > 0) {
        let randomDrink;
        if (
          drinkParams.option === "ingredient" ||
          drinkParams.option === "category"
        ) {
          const drinks = drinkResponse.data.drinks;
          randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
        } else {
          randomDrink = drinkResponse.data.drinks[0];
        }

        setSelectedDrink(randomDrink);
      } else {
        console.error("No drinks found in response data");
      }
    } catch (error) {
      console.error("Error fetching date:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <SelectMeal
            onSelect={handleMealSelect}
            onParamsChange={handleMealParamsChange}
          />
        </View>

        <View style={styles.content}>
          <SelectDrink
            onSelect={handleDrinkSelect}
            onParamsChange={handleDrinkParamsChange}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Button label="Generate Date" onPress={handleGenerateDate} />

        {selectedMeal && (
          <View style={styles.content}>
            <ViewDate meal={selectedMeal} drink={selectedDrink} />
          </View>
        )}
      </View>

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

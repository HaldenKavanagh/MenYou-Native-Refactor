import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import React, { useState } from "react";
import SelectMeal from "./components/SelectMeal.js";
import SelectDrink from "./components/SelectDrink.js";
import SelectMovie from "./components/SelectMovie.js";
import Button from "./components/Button.js";
import ViewDate from "./components/ViewDate.js";
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
  const [drinkParams, setDrinkParams] = useState({
    option: "random",
    ingredient: "",
    category: "",
  });

  const [movieParams, setMovieParams] = useState({
    option: "random",
    genre: "",
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

  const handleMealParamsChange = (option, region, category) => {
    setMealParams({ option, region, category });
  };

  const handleDrinkParamsChange = (option, ingredient, category) => {
    setDrinkParams({ option, ingredient, category });
  };

  const handleMovieParamsChange = (option, genre) => {
    setMovieParams({ option, genre });
  };

  const handleGenerateDate = async () => {
    console.log("Generating date...");
    try {
      let mealApiUrl = "";
      let drinkApiUrl = "";
      let movieApiUrl = "";

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

      switch (movieParams.option) {
        case "random":
          movieApiUrl =
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc";
          break;
        case "genre":
          movieApiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=${movieParams.genre}`;
          break;
        default:
          break;
      }
      console.log("Drink", drinkApiUrl);
      console.log("Meal", mealApiUrl);
      console.log("Movie", movieApiUrl);

      const movieResponse = await axios.get(movieApiUrl, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWZhY2EzZTE4ZWExYzg1ZTg2YjMxMDNiYWNiMzcyMyIsInN1YiI6IjY1Nzc1NWZiZWM4YTQzMDBlMDlhMGY1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8v5Z0VqlnnmVGtURD871qN8SwL9ZHnQg7s8YPibUrfs`,
        },
      });

      const mealResponse = await axios.get(mealApiUrl);
      const drinkResponse = await axios.get(drinkApiUrl);

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

      if (movieResponse.data.results && movieResponse.data.results.length > 0) {
        // Extract random movie data and set state
        let randomMovie =
          movieResponse.data.results[
            Math.floor(Math.random() * movieResponse.data.results.length)
          ];
        setSelectedMovie(randomMovie);
      } else {
        console.error("No movies found in response data");
      }
    } catch (error) {
      console.error("Error fetching date:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.bannerText}>MenYou</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.form}>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>Your Meal:</Text>
          </View>
          <View style={styles.content}>
            <SelectMeal
              onSelect={handleMealSelect}
              onParamsChange={handleMealParamsChange}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>Your Drink:</Text>
          </View>
          <View style={styles.content}>
            <SelectDrink
              onSelect={handleDrinkSelect}
              onParamsChange={handleDrinkParamsChange}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>Your Movie:</Text>
          </View>
          <View style={styles.content}>
            <SelectMovie
              onSelect={handleMovieSelect}
              onParamsChange={handleMovieParamsChange}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Button label="Generate Date" onPress={handleGenerateDate} />

          {selectedMeal && (
            <View style={styles.content}>
              <ViewDate
                meal={selectedMeal}
                drink={selectedDrink}
                movie={selectedMovie}
              />
            </View>
          )}
        </View>
      </ScrollView>

      <StatusBar style="light" backgroundColor="#f9dbbd" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#450920",
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  form: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: "#f9dbbd",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    marginBottom: 20,
  },
  scroll: {
    flexGrow: 1,
  },
  bottomContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f9dbbd",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#450920",
    fontWeight: "bold",
    fontSize: 16,
  },
  banner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#f9dbbd",
    borderRadius: 8,
  },
  logo: {
    width: 50,
    height: 50,
  },
  bannerText: {
    color: "#450920",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
  },
});

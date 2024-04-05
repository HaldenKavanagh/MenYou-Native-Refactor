import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ViewDate = ({ meal, drink, movie }) => {
  if (!drink || !meal || !movie) {
    return null;
  }

  const [showMealDetails, setShowMealDetails] = useState(false);
  const [showDrinkDetails, setShowDrinkDetails] = useState(false);
  const [showMovieDetails, setShowMovieDetails] = useState(false);

  const toggleMealDetails = () => setShowMealDetails(!showMealDetails);
  const toggleDrinkDetails = () => setShowDrinkDetails(!showDrinkDetails);
  const toggleMovieDetails = () => setShowMovieDetails(!showMovieDetails);

  const renderIngredients = (recipe) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <Text key={i} style={styles.info}>
            {recipe[`strIngredient${i}`]}: {recipe[`strMeasure${i}`]}
          </Text>
        );
      } else {
        break;
      }
    }

    return ingredients;
  };

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.label}>Selected Meal:</Text>
      <Text style={styles.info}>{meal.strMeal}</Text>
      <TouchableOpacity onPress={toggleMealDetails}>
        <Text style={styles.buttonText}>View Ingredients & Recipe</Text>
        {showMealDetails && (
          <>
            <Text style={styles.subLabel}>Ingredients:</Text>
            {renderIngredients(meal)}
            <Text style={styles.subLabel}>Recipe:</Text>
            <Text style={styles.info}>{meal.strInstructions}</Text>
          </>
        )}
      </TouchableOpacity>
      <Image
        source={{ uri: meal.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.label}>Selected Drink:</Text>
      <Text style={styles.info}>{drink.strDrink}</Text>
      <TouchableOpacity onPress={toggleDrinkDetails}>
        <Text style={styles.buttonText}>View Ingredients & Recipe</Text>
        {showDrinkDetails && (
          <>
            <Text style={styles.subLabel}>Ingredients:</Text>
            {renderIngredients(drink)}
            <Text style={styles.subLabel}>Instructions:</Text>
            <Text style={styles.info}>{drink.strInstructions}</Text>
          </>
        )}
      </TouchableOpacity>
      <Image
        source={{ uri: drink.strDrinkThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.label}>Selected Movie:</Text>
      <Text style={styles.info}>{movie.original_title}</Text>
      <TouchableOpacity onPress={toggleMovieDetails}>
        <Text style={styles.buttonText}>Show Details</Text>

        {showMovieDetails && (
          <>
            <Text style={styles.subLabel}>Overview:</Text>
            <Text style={styles.info}>{movie.overview}</Text>
            <Text style={styles.subLabel}>Release Date:</Text>
            <Text style={styles.info}>{movie.release_date}</Text>
          </>
        )}
      </TouchableOpacity>
      {movie.poster_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`,
          }}
          style={styles.poster}
          resizeMode="cover"
        />
      ) : (
        <Text style={styles.info}>No Poster Available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: "#ffa5ab",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40,
    width: 300,
  },
  label: {
    color: "#450920",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  poster: {
    width: "100%",
    height: 300,
    marginTop: 10,
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#a53860",
    color: "#f9dbbd",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
  },
});

export default ViewDate;

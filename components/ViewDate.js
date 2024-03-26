import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ViewDate = ({ meal, drink, movie }) => {
  if (!drink || !meal || !movie) {
    return null;
  }

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.label}>Selected Meal:</Text>
      <Text style={styles.mealName}>Meal Name: {meal.strMeal}</Text>
      <Image
        source={{ uri: meal.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.label}>Selected Drink:</Text>
      <Text style={styles.mealName}>Drink Name: {drink.strDrink}</Text>
      <Image
        source={{ uri: drink.strDrinkThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.label}>Selected Movie:</Text>
      <Text style={styles.mealName}>Movie Name: {movie.original_title}</Text>
      <Text style={styles.mealName}>Description: {movie.overview}</Text>
      <Text style={styles.mealName}>Release: {movie.release_date}</Text>
      {movie.poster_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`,
          }}
          style={styles.poster}
        />
      ) : (
        <Text style={styles.mealName}>No Poster Available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: "#f9dbbd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  mealName: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 5,
  },
  poster: {
    width: "100%", // Adjust dimensions as needed
    height: 300, // Adjust dimensions as needed
    marginTop: 10,
  },
});

export default ViewDate;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ViewDate = ({ meal, drink, movie }) => {
  if (!drink || !meal || !movie) {
    return null;
  }

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.label}>Selected Meal:</Text>
      <Text style={styles.info}>{meal.strMeal}</Text>
      <Image
        source={{ uri: meal.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.label}>Selected Drink:</Text>
      <Text style={styles.info}>{drink.strDrink}</Text>
      <Image
        source={{ uri: drink.strDrinkThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.label}>Selected Movie:</Text>
      <Text style={styles.info}>{movie.original_title}</Text>
      <Text style={styles.info}>{movie.overview}</Text>
      <Text style={styles.info}>Release: {movie.release_date}</Text>
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
    backgroundColor: "#f9dbbd",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
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
});

export default ViewDate;

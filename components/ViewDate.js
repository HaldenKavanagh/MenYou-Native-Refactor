import { View, Text, StyleSheet } from "react-native";

const ViewDate = ({ meal, drink, movie }) => {
  if (!drink || !meal || !movie) {
    return null;
  }

  console.log(movie.original_title);
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.label}>Selected Meal:</Text>
      <Text style={styles.mealName}>Meal Name: {meal.strMeal}</Text>
      <Text style={styles.label}>Selected Drink:</Text>
      <Text style={styles.mealName}>Drink Name: {drink.strDrink}</Text>
      <Text style={styles.label}>Selected Movie:</Text>
      <Text style={styles.mealName}>Movie Name: {movie.original_title}</Text>
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
  },
});

export default ViewDate;

import { View, Text, StyleSheet } from "react-native";

const ViewDate = ({ meal }) => {
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.label}>Selected Meal:</Text>
      <Text style={styles.mealName}>Meal Name: {meal.strMeal}</Text>
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

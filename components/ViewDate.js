import React from "react";
import { View, Text } from "react-native";

const ViewDate = ({ meal }) => {
  return (
    <View>
      <Text>Selected Meal:</Text>
      <Text>Meal Name: {meal.strMeal}</Text>
      
    </View>
  );
};

export default ViewDate;
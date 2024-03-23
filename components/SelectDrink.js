import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SelectDrink = ({ onSelect, onParamsChange }) => {
  const [selectedOption, setSelectedOption] = useState("random");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOptionChange = (itemValue) => {
    setSelectedOption(itemValue);
    onParamsChange(itemValue, selectedIngredient, selectedCategory);
  };

  const handleIngredientChange = (itemValue) => {
    setSelectedIngredient(itemValue);
    onParamsChange(selectedOption, itemValue, selectedCategory);
  };

  const handleCategoryChange = (itemValue) => {
    setSelectedCategory(itemValue);
    onParamsChange(selectedOption, selectedIngredient, itemValue);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
        style={styles.picker}
      >
        <Picker.Item label="Generate Random" value="random" />
        <Picker.Item label="Select from Ingredient" value="ingredient" />
        <Picker.Item label="Select by Category" value="category" />
      </Picker>
      {selectedOption === "ingredient" && (
        <Picker
          selectedValue={selectedIngredient}
          onValueChange={handleIngredientChange}
          style={styles.picker}
        >
          <Picker.Item label="Tequila" value="Tequila" />
          {/* Add other ingredient options as needed */}
        </Picker>
      )}
      {selectedOption === "category" && (
        <Picker
          selectedValue={selectedCategory}
          onValueChange={handleCategoryChange}
          style={styles.picker}
        >
          <Picker.Item label="Cocktail" value="Cocktail" />
          {/* Add other category options as needed */}
        </Picker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  picker: {
    marginBottom: 10,
    backgroundColor: "#ffa5ab",
    borderRadius: 8,
  },
});

export default SelectDrink;

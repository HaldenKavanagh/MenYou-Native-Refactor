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
          <Picker.Item label="Choose" value="/" />
          <Picker.Item label="Tequila" value="Tequila" />
          <Picker.Item label="Gin" value="Gin" />
          <Picker.Item label="Applejack" value="Applejack" />
          <Picker.Item label="Light rum" value="Light rum" />
          <Picker.Item label="Triple sec" value="Triple sec" />
          <Picker.Item label="Sweet Vermouth" value="Sweet Vermouth" />
          <Picker.Item label="Southern Comfort" value="Southern Comfort" />
          <Picker.Item label="Scotch" value="Scotch" />
          <Picker.Item label="Orange bitters" value="Orange bitters" />
          <Picker.Item label="Brandy" value="Brandy" />
          <Picker.Item label="Dry Vermouth" value="Dry Vermouth" />
          <Picker.Item label="Amaretto" value="Amaretto" />
          <Picker.Item label="Tea" value="Tea" />
          <Picker.Item label="Champagne" value="Champagne" />
          <Picker.Item label="Coffee liqueur" value="Coffee liqueur" />
          <Picker.Item label="Bourbon" value="Bourbon" />
          <Picker.Item label="Vodka" value="Vodka" />
          <Picker.Item label="Bitters" value="Bitters" />
          <Picker.Item label="Kahlua" value="Kahlua" />
          <Picker.Item label="Watermelon" value="Watermelon" />
          <Picker.Item label="Lime juice" value="Lime juice" />
          <Picker.Item label="Irish whiskey" value="Irish whiskey" />
          <Picker.Item label="Carbonated water" value="Carbonated water" />
          <Picker.Item label="Creme de Cacao" value="Creme de Cacao" />
          <Picker.Item label="Grenadine" value="Grenadine" />
          <Picker.Item label="Port" value="Port" />
          <Picker.Item label="Red wine" value="Red wine" />
          <Picker.Item label="Rum" value="Rum" />
          <Picker.Item label="Grapefruit juice" value="Grapefruit juice" />
          <Picker.Item label="Cognac" value="Cognac" />
          <Picker.Item label="Apple juice" value="Apple juice" />
          <Picker.Item label="Pineapple juice" value="Pineapple juice" />
          <Picker.Item label="Lemon juice" value="Lemon juice" />
          <Picker.Item label="Sugar syrup" value="Sugar syrup" />
          <Picker.Item label="Milk" value="Milk" />
          <Picker.Item label="Strawberries" value="Strawberries" />
          <Picker.Item label="Chocolate syrup" value="Chocolate syrup" />
          <Picker.Item label="Yoghurt" value="Yoghurt" />
          <Picker.Item label="Mango" value="Mango" />
          <Picker.Item label="Ginger" value="Ginger" />
          <Picker.Item label="Lime" value="Lime" />
          <Picker.Item label="Tomato juice" value="Tomato juice" />
          <Picker.Item label="Cocoa powder" value="Cocoa powder" />
          <Picker.Item label="Chocolate" value="Chocolate" />
          <Picker.Item label="Heavy cream" value="Heavy cream" />
          <Picker.Item label="Coffee" value="Coffee" />
          <Picker.Item label="Spiced rum" value="Spiced rum" />
          <Picker.Item label="Espresso" value="Espresso" />
          <Picker.Item label="Cocoa powder" value="Cocoa powder" />
          <Picker.Item label="Apple cider" value="Apple cider" />
          <Picker.Item label="Everclear" value="Everclear" />
          <Picker.Item label="Egg yolk" value="Egg yolk" />
          <Picker.Item label="Egg" value="Egg" />
          <Picker.Item label="Whiskey" value="Whiskey" />
          <Picker.Item label="Irish cream" value="Irish cream" />
          <Picker.Item label="Cider" value="Cider" />
          <Picker.Item label="Sprite" value="Sprite" />
        </Picker>
      )}
      {selectedOption === "category" && (
        <Picker
          selectedValue={selectedCategory}
          onValueChange={handleCategoryChange}
          style={styles.picker}
        >
          <Picker.Item label="Choose" value="/" />
          <Picker.Item label="Average Drink" value="Ordinary Drink" />
          <Picker.Item label="Cocktail" value="Cocktail" />
          <Picker.Item label="Shake" value="Shake" />
          <Picker.Item
            label="Punch / Party Drink"
            value="Punch / Party Drink"
          />
          <Picker.Item label="Shot" value="Shot" />
          <Picker.Item label="Beer" value="Beer" />
          <Picker.Item label="Coffee / Tea" value="Coffee / Tea" />
          <Picker.Item label="Cocoa" value="Cocoa" />
          <Picker.Item label="Soft Drink" value="Soft Drink" />
          <Picker.Item label="Other / Unknown" value="Other / Unknown" />
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

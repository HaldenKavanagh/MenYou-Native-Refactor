import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SelectMeal = ({ onSelect, onParamsChange }) => {
  const [selectedOption, setSelectedOption] = useState("random");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOptionChange = (itemValue) => {
    setSelectedOption(itemValue);
    onParamsChange(itemValue, selectedRegion, selectedCategory);
  };

  const handleRegionChange = (itemValue) => {
    setSelectedRegion(itemValue);
    onParamsChange(selectedOption, itemValue, selectedCategory);
  };

  const handleCategoryChange = (itemValue) => {
    setSelectedCategory(itemValue);
    onParamsChange(selectedOption, selectedRegion, itemValue);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
        style={styles.picker}
      >
        <Picker.Item label="Generate Random" value="random" />
        <Picker.Item label="Select by Region" value="region" />
        <Picker.Item label="Select by Category" value="category" />
      </Picker>
      {selectedOption === "region" && (
        <Picker
          selectedValue={selectedRegion}
          onValueChange={handleRegionChange}
          style={styles.picker}
        >
          <Picker.Item label="Choose" value="/" />
          <Picker.Item label="American" value="American" />
          <Picker.Item label="British" value="British" />
          <Picker.Item label="Chinese" value="Chinese" />
          <Picker.Item label="Indian" value="Indian" />
          <Picker.Item label="Filipino" value="Filipino" />
          <Picker.Item label="French" value="French" />
          <Picker.Item label="Greek" value="Greek" />
          <Picker.Item label="Italian" value="Italian" />
          <Picker.Item label="Jamaican" value="Jamaican" />
          <Picker.Item label="Japanese" value="Japanese" />
          <Picker.Item label="Mexican" value="Mexican" />
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="Thai" value="Thai" />
          <Picker.Item label="Vietnamese" value="Vietnamese" />
        </Picker>
      )}
      {selectedOption === "category" && (
        <Picker
          selectedValue={selectedCategory}
          onValueChange={handleCategoryChange}
          style={styles.picker}
        >
          <Picker.Item label="Choose" value="/" />
          <Picker.Item label="Beef" value="Beef" />
          <Picker.Item label="Chicken" value="Chicken" />
          <Picker.Item label="Pork" value="Pork" />
          <Picker.Item label="Dessert" value="Dessert" />
          <Picker.Item label="Goat" value="Goat" />
          <Picker.Item label="Lamb" value="Lamb" />
          <Picker.Item label="Pasta" value="Pasta" />
          <Picker.Item label="Seafood" value="Seafood" />
          <Picker.Item label="Vegetarian" value="Vegetarian" />
          <Picker.Item label="Vegan" value="Vegan" />
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

export default SelectMeal;

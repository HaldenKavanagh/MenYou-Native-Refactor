import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SelectMovie = ({ onSelect, onParamsChange }) => {
  const [selectedOption, setSelectedOption] = useState("random");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleOptionChange = (itemValue) => {
    setSelectedOption(itemValue);
    onParamsChange(itemValue, selectedGenre);
  };

  const handleGenreChange = (itemValue) => {
    setSelectedGenre(itemValue);
    onParamsChange(selectedOption, itemValue);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
        style={styles.picker}
      >
        <Picker.Item label="Generate Random" value="random" />
        <Picker.Item label="Select by Genre" value="genre" />
      </Picker>
      {selectedOption === "genre" && (
        <Picker
          selectedValue={selectedGenre}
          onValueChange={handleGenreChange}
          style={styles.picker}
        >
          <Picker.Item label="Choose" value="/" />
          <Picker.Item label="Action" value="28" />
          <Picker.Item label="Romance" value="10749" />
          <Picker.Item label="Comedy" value="35" />
          <Picker.Item label="Adventure" value="12" />
          <Picker.Item label="Animated" value="16" />
          <Picker.Item label="Crime" value="80" />
          <Picker.Item label="Documentary" value="99" />
          <Picker.Item label="Drama" value="18" />
          <Picker.Item label="Family" value="10751" />
          <Picker.Item label="Fantasy" value="14" />
          <Picker.Item label="Historical" value="36" />
          <Picker.Item label="Horror" value="27" />
          <Picker.Item label="Music" value="10402" />
          <Picker.Item label="Mystery" value="9648" />
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

export default SelectMovie;

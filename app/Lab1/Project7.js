import React, { useState } from "react";
import { TextInput, Text, View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default () => {
  const [name, setName] = useState("");

  const handlePress = () => {
    alert(`Hello, ${name || "stranger"}!`);
  };

  return (
    <View style={styles.container}>
      <Text>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
      />
      <Button title="Say Hello" onPress={handlePress} />
    </View>
  );
};

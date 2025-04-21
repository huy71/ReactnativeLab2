import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert('Alert', 'hello!');
  };

  return (
    <View style={styles.container}>
      <Button title="Button 1" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

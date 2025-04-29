// app/Lab2/index.tsx
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Lab2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 2</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => router.push("/Lab2/App")}
      >
        <Text style={styles.buttonText}>Mở Lab2</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd", // màu nền nhẹ cho Lab2
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#1976d2",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  buttonPressed: {
    backgroundColor: "#1565c0",
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

// app/index.tsx
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const labs = [1, 1.2, 2, 3, 4, 5, 6];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📚 Chọn Lab</Text>

      {labs.map((lab) => (
        <Pressable
          key={lab}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push(`../Lab${lab}`)}
        >
          <Text style={styles.buttonText}>Lab {lab}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#e0f7fa", // Nền nhẹ đẹp mắt
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#3182ce",
    marginBottom: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonPressed: {
    backgroundColor: "#2b6cb0",
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
});

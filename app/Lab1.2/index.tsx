import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Lab1_2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lab 1.2</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => router.push("/Lab1.2/Projectcaculator")}
      >
        <Text style={styles.buttonText}>Mở Máy Tính</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbe6",
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
    backgroundColor: "#00bcd4",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  buttonPressed: {
    backgroundColor: "#0097a7",
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

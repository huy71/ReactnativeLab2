import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Lab1Screen() {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lab1 - Chọn Project:</Text>

      {projects.map((p) => (
        <Link href={`/Lab1/Project${p}`} asChild key={p}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Project {p}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 12,
    backgroundColor: "#4fd1c5",
    marginBottom: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

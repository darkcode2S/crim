import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons
import { Colors } from "../../constants/Colors";

const categories = [
  { id: "1", title: "Reviewer", icon: "book" },
  { id: "2", title: "Exercises", icon: "checkmark-circle" },
  { id: "3", title: "Summary", icon: "information-circle" },
];

const Topic = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <Ionicons
        name={item.icon}
        size={24}
        color={Colors.primary}
        style={styles.icon}
      />
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Review materials</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Topic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 28,
    fontFamily: "outfit-bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  icon: {
    marginRight: 15, // Space between icon and text
  },
  categoryText: {
    fontSize: 18,
    color: "#333",
    fontFamily: "outfit",
  },
});
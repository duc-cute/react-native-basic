import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.labButton}
        onPress={() => navigation.navigate("Lab01")}
      >
        <Text style={styles.labText}>Lab 01</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.labButton}
        onPress={() => navigation.navigate("Lab02")}
      >
        <Text style={styles.labText}>Lab 02</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.labButton}
        onPress={() => navigation.navigate("Lab03")}
      >
        <Text style={styles.labText}>Lab 03</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.labButton}
        onPress={() => navigation.navigate("Lab04")}
      >
        <Text style={styles.labText}>Lab 04</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.labButton}
        onPress={() => navigation.navigate("Lab05")}
      >
        <Text style={styles.labText}>Lab 05</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
    // alignItems: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  labButton: {
    backgroundColor: "#f0f0f0",
    // padding: 20,
    // margin: 10,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
  },
  labText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;

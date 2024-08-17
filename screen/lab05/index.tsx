import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



const Lab05 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Lab05</Text>

      <View style={styles.group}>
      <TouchableOpacity
          style={styles.labButton}
          onPress={() => navigation.navigate("Course")}
        >
          <Text style={styles.labText}>Đi tới Course</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.labButton}
          onPress={() => navigation.navigate("Product")}
        >
          <Text style={styles.labText}>Đi tới Product</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labButton: {
    backgroundColor: "#f0f0f0",
    // padding: 20,
    // margin: 10,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
  },
  labText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  group: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
});

export default Lab05;

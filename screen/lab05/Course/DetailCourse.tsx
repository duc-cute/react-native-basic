import {
  useNavigation,
  useRoute,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { RootStackParamList } from "../../../types/route";

const CourseDetail = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "CourseDetail"> = useRoute();
  console.log("route", route);


  return (
    <View>
      <Text style={styles.header}>Lab032</Text>

      <View style={styles.body}>
        {route.params?.course.image && (
          <View style={styles.container}>
            <ImageBackground
              source={{ uri: route.params.course.image }}
              resizeMode="cover"
              style={styles.image}
            >
              <Text style={styles.text}>{route.params.course.name}</Text>
              <Text>Price Course: {route.params.course.price}VND</Text>
              <Text>Description Course: {route.params.course.desc}</Text>
            </ImageBackground>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  text: {
    color: "white",
    fontSize: 32,
    lineHeight: 64,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: "center",
  },
  resultInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 10,
    margin: 10,
  },

  itemPress: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    // width: "50%",
    backgroundColor: "#ccc",
    padding: 8,
    borderRadius: 8,
  },

  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 50,
    marginTop: 50,
  },
  // layout: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default CourseDetail;

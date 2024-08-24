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
  Image,
  SafeAreaView,
} from "react-native";
import { RootStackParamList } from "../../../types/route";

const StudentDetail = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "DetailStudent"> = useRoute();
  console.log("route", route);
  console.log("route.params.course.name", route?.params);
  console.log("route.params.course.name", route?.params);

  return (
    <View style={styles.body}>
      <Text style={styles.header}>Student Detail</Text>

      <View style={styles.body}>
        <View>
          <Text>{`${route?.params?.student?.msv}-${route?.params?.student?.name}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 100,
    height: 100,
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
    fontSize: 20,
    textAlign: "center",
  },
  resultInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 10,
    margin: 10,
  },

  body: {
    display: "flex",
    paddingHorizontal: 10,
    flex: 1,
    height: 100,
    marginBottom: 20,
    gap: 50,
    color: "#000",
    backgroundColor: "#fff",
  },
  textItem: {
    display: "flex",
  },
  // layout: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default StudentDetail;

import { useNavigation, useRoute,NavigationProp,RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
  
} from "react-native";

const Lab03_1_Result = () => {
  // const route = useRoute();
  // const navigation = useNavigation();

  // const test = navigation.getParam("des");
  // console.log("tt", test);

  // const { result, des } = route.params;

  // console.log("result", JSON.stringify(result));
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, 'Lab031Result'> = useRoute();
  console.log("route",route)


  return (
    <View >
      <Text style={styles.header}>Lab032</Text>

      <View style={styles.body}>
      <Text>{route.params?.result}</Text>
      <Text>{route.params?.des}</Text>
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
    gap: 20,
  },
  // layout: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default Lab03_1_Result;

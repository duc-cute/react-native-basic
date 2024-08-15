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
} from "react-native";
import { RootStackParamList } from "../../../types/route";

const Lab042_1_Result = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "Lab0421Result"> = useRoute();
  console.log("route", route);

  const formatNumber = (num: number | undefined): number => {
    if (num === undefined) {
      return 0;
    }
    return Math.round(num * 100) / 100;
  };

  return (
    <View>
      <Text style={styles.header}>Lab032</Text>

      <View style={styles.body}>
        {route.params?.result.x1 && (
          <Text>x1:{formatNumber(route.params?.result.x1)}</Text>
        )}
        {route.params?.result.x2 && (
          <Text>x2:{formatNumber(route.params?.result.x2)}</Text>
        )}
        <Text>{route.params?.result.mes}</Text>
        {/* <Text>{route.params?.des}</Text> */}
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
    gap: 50,
    marginTop: 50,
  },
  // layout: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default Lab042_1_Result;

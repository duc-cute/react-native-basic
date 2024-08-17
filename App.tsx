import React from "react";
import { useState } from "react";

import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/home/HomeScreen";
import Lab03 from "./screen/lab03/Lab03";
import Lab03_1 from "./screen/lab03/lab031/Lab031";
import Lab03_2 from "./screen/lab03/lab032/Lab032";
import Lab03_1_Result from "./screen/lab03/lab031/Lab031Result";
import { RootStackParamList } from "./types/route";
import Lab042 from "./screen/lab04/lab042/Lab042";
import Lab042_1_Result from "./screen/lab04/lab042/Lab0421Result";
import Lab04 from "./screen/lab04/Lab04";
import Course from "./screen/lab05/Course/HomeCourse";
import CourseDetail from "./screen/lab05/Course/DetailCourse";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Trang Chủ" }}
        />
        <Stack.Screen name="Lab03" component={Lab03} />
        <Stack.Screen
          name="Lab03.1"
          component={Lab03_1}
          options={{ title: "Lab 03.1" }}
        />
        <Stack.Screen
          name="Lab03.2"
          component={Lab03_2}
          options={{ title: "Lab 03.2" }}
        />
        <Stack.Screen
          name="Lab031Result"
          component={Lab03_1_Result}
          options={{ title: "Lab 03.2 Result" }}
        />
        <Stack.Screen
          name="Lab042"
          component={Lab042}
          options={{ title: "Lab 042" }}
        />
        <Stack.Screen
          name="Lab04"
          component={Lab04}
          options={{ title: "Lab 04" }}
        />
        <Stack.Screen
          name="Lab0421Result"
          component={Lab042_1_Result}
          options={{ title: "Lab 0421 Result" }}
        />
          <Stack.Screen
          name="Course"
          component={Course}
          options={{ title: "Course" }}
        />
           <Stack.Screen
          name="CourseDetail"
          component={CourseDetail}
          options={{ title: "CourseDetail" }}
        />
            <Stack.Screen
          name="Course"
          component={Course}
          options={{ title: "Product" }}
        />
           <Stack.Screen
          name="CourseDetail"
          component={CourseDetail}
          options={{ title: "ProductDetail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// //css in js
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     flex: 1,
//     backgroundColor: "#fff",
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },

//   header: {
//     backgroundColor: "orange",
//     paddingHorizontal: 20,
//     fontSize: 20,
//     textAlign: "center",
//   },
//   todoInput: {
//     borderBottomWidth: 1,
//     borderBottomColor: "green",
//     padding: 5,
//     margin: 15,
//   },

//   todoItem: {
//     fontSize: 20,
//     borderWidth: 1,
//     borderStyle: "dashed",
//     marginBottom: 20,
//     padding: 10,
//   },

//   itemPress: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   body: {
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
// });

import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import {
  ICOURSE,
  IRESULTEQUATION,
  RootStackParamList,
} from "../../../types/route";
import { SafeAreaView } from "react-native-safe-area-context";

interface IRESULT {
  a?: number;
  b?: number;
  c?: number;
}

const course = [
  {
    id: 1,
    name: "HTML & CSS",
    desc: "Khóa học cơ bản HTML, CSS",
    price: 10000,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletdiv.com%2Fkhoa-hoc-html-css%2F&psig=AOvVaw27DiMo0R2S8QrWKU3jwMTD&ust=1723940339526000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjBk67g-ocDFQAAAAAdAAAAABAE",
  },
  {
    id: 2,
    name: "PHP",
    desc: "Khóa học cơ bản PHP",
    price: 15000,
    image:
      "https://huynhthaihung.com/wp-content/uploads/2021/09/Compile-PHP-la-gi.png",
  },
];

const Course = () => {
  const [valueInput, setValueInput] = useState<IRESULT | undefined>(undefined);

  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handlePress = (item: ICOURSE) => {
    navigation.navigate("CourseDetail", {
      course: item,
    });
  };
  const Item = ({ item }: { item: ICOURSE }) => (
    <View style={styles.itemCourse}>
      <Text style={styles.name} onPress={() => handlePress(item)}>
        {item.name}
      </Text>
    </View>
  );
  return (
    <View>
      <Text style={styles.header}>Course</Text>
      <View style={styles.body}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={course}
            renderItem={(item) => <Item item={item.item} />}
            keyExtractor={(item) => item.id.toFixed()}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: 20,
    gap: 20,
  },

  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: "center",
  },
  itemCourse: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },

  name: {
    fontSize: 32,
  },

  body: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  list: {
    display: "flex",
    gap: 30,
    flexDirection: "column",
  },
});

export default Course;

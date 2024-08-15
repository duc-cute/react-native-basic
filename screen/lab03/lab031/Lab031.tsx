import { useNavigation,NavigationProp } from "@react-navigation/native";
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

const array1 = [
  {
    value: 0,
    title: "Canh",
  },

  {
    value: 1,
    title: "Tân",
  },
  {
    value: 2,
    title: "Nhâm",
  },
  {
    value: 3,
    title: "Quý",
  },

  {
    value: 4,
    title: "Giáp",
  },
  {
    value: 5,
    title: "Ất",
  },
  {
    value: 6,
    title: "Bính",
  },
  {
    value: 7,
    title: "Đinh",
  },
  {
    value: 8,
    title: "Mậu",
  },
  {
    value: 9,
    title: "Kỷ",
  },
];

const array2 = [
  {
    value: 0,
    title: "Thân",
    des: "Người cầm tinh con khỉ nhanh nhẹn, thông minh và sáng tạo.",
  },

  {
    value: 1,
    title: "Dậu",
    des: "Người cầm tinh con gà cầu toàn, chăm chỉ và trung thành.",
  },
  {
    value: 2,
    title: "Tuất",
    des: "Người cầm tinh con chó trung thành, thật thà và dũng cảm.",
  },
  {
    value: 3,
    title: "Hợi",
    des: "Người cầm tinh con heo hiền lành, thật thà và bao dung.",
  },

  {
    value: 4,
    title: "Tý",
    des: "Người cầm tinh con chuột rất thông minh, lanh lợi và nhạy bén.",
  },
  {
    value: 5,
    title: "Sửu",
    des: "Người cầm tinh con trâu kiên nhẫn, cần cù và chăm chỉ.",
  },
  {
    value: 6,
    title: "Dần",
    des: "Người cầm tinh con hổ mạnh mẽ, dũng cảm và quyết đoán.",
  },
  {
    value: 7,
    title: "Mão",
    des: "Người cầm tinh con mèo nhẹ nhàng, lịch sự và giàu lòng trắc ẩn.",
  },
  {
    value: 8,
    title: "Thìn",
    des: "Người cầm tinh con rồng mạnh mẽ, quyết đoán và có uy quyền.",
  },
  {
    value: 9,
    title: "Tỵ",
    des: "Người cầm tinh con rắn sâu sắc, kiên nhẫn và kín đáo.",
  },
  {
    value: 10,
    title: "Ngọ",
    des: "Người cầm tinh con ngựa nhiệt huyết, độc lập và yêu thích tự do.",
  },
  {
    value: 11,
    title: "Mùi",
    des: "Người cầm tinh con dê nhẹ nhàng, tế nhị và chu đáo.",
  },
];
const Lab03_1 = () => {
  const [valueInput, setValueInput] = useState("");
  const [result, setResult] = useState("");

  // const navigation = useNavigation();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleShowResult = () => {
    const result_one = array1.find(
      (item) => +valueInput % 10 === item.value
    );
    const result_two = array2.find(
      (item) => +valueInput % 12 === item.value
    );

    const combinedResult = result_one?.title + " " + result_two?.title;
    setResult(combinedResult);

    navigation.navigate("Lab031Result", {
      des: result_two?.des ?? "",
      result: combinedResult 
    });
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.header}>Lab032</Text>
      <TextInput
        value={valueInput}
        style={styles.resultInput}
        onChangeText={(value) => setValueInput(value)}
      />
      <View style={styles.body}>
        <Pressable onPress={handleShowResult} style={styles.itemPress}>
          <View>
            <Text>Result</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.body}>
        <Text>{result}</Text>
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
  layout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Lab03_1;

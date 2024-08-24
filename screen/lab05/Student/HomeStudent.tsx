import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import {
  ICOURSE,
  IRESULTEQUATION,
  ISTUDENT,
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

const Student = () => {
  const [students, setStudents] = useState<ISTUDENT[]>([]); // Danh sách sinh viên
  const [student, setStudent] = useState<ISTUDENT>({
    id: 0,
    msv: "",
    name: "",
    pointPhysics: 0,
    pointMath: 0,
    pointChemistry: 0,
  });
  const [search, setSearch] = useState<ISTUDENT>();

  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  function findStudentWithLowestTotalPoints(students, flag) {
    if (students.length === 0) return null;

    if (flag === "min") {
      return students.reduce((lowest, student) => {
        const totalPoints =
          student.pointPhysics + student.pointChemistry + student.pointMath;
        const lowestTotalPoints =
          lowest.pointPhysics + lowest.pointChemistry + lowest.pointMath;

        return totalPoints < lowestTotalPoints ? student : lowest;
      }, students[0]);
    } else {
      return students.reduce((lowest, student) => {
        const totalPoints =
          student.pointPhysics + student.pointChemistry + student.pointMath;
        const lowestTotalPoints =
          lowest.pointPhysics + lowest.pointChemistry + lowest.pointMath;

        return totalPoints > lowestTotalPoints ? student : lowest;
      }, students[0]);
    }
  }
  const handleSearch = (flag: string) => {
    let student = findStudentWithLowestTotalPoints(students, flag);
    console.log("student", student);
    navigation.navigate("DetailStudent", { student });
  };

  const Item = ({ item }: { item: ISTUDENT }) => (
    <View style={styles.itemCourse}>
      {/* <Text style={styles.name} onPress={() => handlePress(item)}> */}
      <Text
        style={styles.name}
      >{`${item.msv}-${item.name}-${item.pointChemistry} - ${item.pointMath} - ${item.pointPhysics}`}</Text>
    </View>
  );
  console.log("student", student);

  const handleSubmit = () => {
    // Kiểm tra dữ liệu đầu vào
    if (
      !student.msv ||
      !student.name ||
      student.pointPhysics === null ||
      !student.pointMath === null ||
      !student.pointChemistry === null
    ) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newStudent: ISTUDENT = {
      ...student,
      id: students.length + 1,
    };

    setStudents((prev) => [...prev, newStudent]);

    setStudent({
      id: 0,
      msv: "",
      name: "",
      pointPhysics: 0,
      pointMath: 0,
      pointChemistry: 0,
    });
  };
  return (
    <View>
      <Text style={styles.header}>Sinh viên</Text>
      <View style={styles.search}>
        <View style={styles.bodySearch}>
          <Button
            title="Tìm sinh viên điểm cao nhất"
            color="#f194ff"
            onPress={() => handleSearch("max")}
          />
          <Button
            title="Tìm sinh viên có điểm thấp nhất"
            color="#f194ff"
            onPress={() => handleSearch("min")}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <View style={styles.bodyItem}>
            <Text>Mã sinh viên</Text>
            <TextInput
              value={student?.msv}
              style={styles.resultInput}
              onChangeText={(value) =>
                setStudent((prev) => ({ ...prev, msv: value }))
              }
            />
          </View>
          <View style={styles.bodyItem}>
            <Text>Họ tên</Text>
            <TextInput
              value={student?.name}
              style={styles.resultInput}
              onChangeText={(value) =>
                setStudent((prev) => ({ ...prev, name: value }))
              }
            />
          </View>
          <View style={styles.bodyItem}>
            <Text>Điểm Vật Lý</Text>
            <TextInput
              value={student?.pointPhysics.toString()}
              style={styles.resultInput}
              onChangeText={(value) =>
                setStudent((prev) => ({ ...prev, pointPhysics: +value }))
              }
            />
          </View>

          <View style={styles.bodyItem}>
            <Text>Điểm Toán</Text>
            <TextInput
              value={student?.pointMath.toString()}
              style={styles.resultInput}
              onChangeText={(value) =>
                setStudent((prev) => ({ ...prev, pointMath: +value }))
              }
            />
          </View>
          <View style={styles.bodyItem}>
            <Text>Điểm Hóa học</Text>
            <TextInput
              value={student?.pointChemistry.toString()}
              style={styles.resultInput}
              onChangeText={(value) =>
                setStudent((prev) => ({ ...prev, pointChemistry: +value }))
              }
            />
          </View>
        </View>

        <Button title="Submit" onPress={handleSubmit} />
        <SafeAreaView>
          <FlatList
            data={students}
            renderItem={(item) => <Item item={item.item} />}
            keyExtractor={(item) => item.id.toFixed()}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodySearch: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
  search: {},
  searchInput: {
    minWidth: 200,
    // flex: 1,
    borderWidth: 1,
    borderBottomColor: "green",
    marginTop: 20,
    marginLeft: 20,
    padding: 5,
  },
  labText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  labButton: {
    backgroundColor: "#f0f0f0",
    // padding: 20,
    // margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: 20,
    gap: 20,
  },
  resultInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  bodyItem: {
    marginBottom: 10,
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
    justifyContent: "flex-start",
    alignItems: "center",
  },

  name: {
    fontSize: 32,
  },

  body: {
    display: "flex",
    paddingHorizontal: 20,
  },
  list: {
    display: "flex",
    gap: 30,
    flexDirection: "column",
  },
});

export default Student;

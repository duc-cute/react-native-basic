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
import { IRESULTEQUATION, RootStackParamList } from "../../../types/route";

interface IRESULT {
  a?: number;
  b?: number;
  c?: number;
}

const Lab042 = () => {
  const [valueInput, setValueInput] = useState<IRESULT | undefined>(undefined);

  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleSetvalue = (key: keyof IRESULT, value: string) => {
    const numValue = parseFloat(value);
    setValueInput((prev) => {
      if (prev) {
        return {
          ...prev,
          [key]: value,
        };
      } else {
        return { a: 0, b: 0, c: 0, [key]: value };
      }
    });
  };

  const handleShowResult = (flag: string) => {
    if (flag === "triangle") {
    } else if (flag === "equation") {
      if (!valueInput) {
        return { mes: "Input is undefined" };
      }
      const { a, b, c } = valueInput;

      if (a === undefined || b === undefined || c === undefined) {
        return { mes: "Invalid input values" };
      }
      const delta = b * b - 4 * a * c;
      let result: IRESULTEQUATION = {};
      result.mes = "";

      if (a === 0) {
        result.mes = "a không được = 0";
      } else if (delta > 0) {
        result.x1 = (-b + Math.sqrt(delta)) / (2 * a);
        result.x2 = (-b - Math.sqrt(delta)) / (2 * a);
      } else if (delta === 0) {
        result.x1 = -b / (2 * a);
        result.mes = "1 nghiệm";
      } else {
        result.mes = "Vô nghiệm";
      }

      navigation.navigate("Lab0421Result", {
        result: result,
      });
    }
  };
  return (
    <View>
      <Text style={styles.header}>Lab042</Text>
      <View style={styles.body}>
        <Text style={{ marginHorizontal: 5 }}>Giá trị a</Text>
        <TextInput
          value={valueInput?.a?.toString()}
          style={styles.resultInput}
          onChangeText={(value) => handleSetvalue("a", value)}
        />
      </View>
      <View style={styles.body}>
        <Text style={{ marginHorizontal: 5 }}>Giá trị b</Text>
        <TextInput
          value={valueInput?.b?.toString()}
          style={styles.resultInput}
          onChangeText={(value) => handleSetvalue("b", value)}
        />
      </View>
      <View style={styles.body}>
        <Text style={{ marginHorizontal: 5 }}>Giá trị c</Text>
        <TextInput
          value={valueInput?.c?.toString()}
          style={styles.resultInput}
          onChangeText={(value) => handleSetvalue("c", value)}
        />
      </View>

      <View style={styles.body}>
        <Pressable
          onPress={() => handleShowResult("triangle")}
          style={styles.itemPress}
        >
          <View>
            <Text>Result Triangle</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => handleShowResult("equation")}
          style={styles.itemPress}
        >
          <View>
            <Text>Result Equation</Text>
          </View>
        </Pressable>
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
    minWidth: 100,
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
    alignItems: "flex-end",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: 20,
  },
  // layout: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default Lab042;

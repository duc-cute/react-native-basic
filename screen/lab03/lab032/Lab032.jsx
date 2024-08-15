import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
{
  /* <FlatList
data={array}
style={styles.body}
// keyExtractor={(item) => item + ""}
renderItem={({ item, index }) => {
  return (
    <Pressable style={styles.itemPress}>
      <View>
        <Text>{index}</Text>
       <Text onPress={() => handleDeleted(data.item.id)}>X</Text> 
      </View>
    </Pressable>
  );
}}
/>  */
}

const array = Array.from({ length: 9 }, (_, index) => index + 1);

const Lab03_2 = () => {
  const [valueInput, setValueInput] = useState("");

  const evaluateExpression = (expression) => {
    const sanitizedExpression = expression.replace(/\b0+(\d)/g, "$1");
    return Function('"use strict";return (' + sanitizedExpression + ")")();
  };

  const handleSetValue = (value) => {
    if (
      (value === " + " ||
        value === " - " ||
        value === " * " ||
        value === " / ") &&
      (valueInput.slice(-1) === "+ " ||
        valueInput.slice(-1) === "- " ||
        valueInput.slice(-1) === "* " ||
        valueInput.slice(-1) === "/ ")
    ) {
      return;
    }
    if (value === "AC") {
      setValueInput("");
      return;
    }

    setValueInput((prev) => prev + value);

    if (value === " = ") {
      setValueInput(evaluateExpression(valueInput) + "");
    }
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.header}>Lab032</Text>
      <TextInput
        value={valueInput}
        style={styles.resultInput}
        // onChangeText={(value) => setTodo(value)}
      />
      <View style={styles.body}>
        {[...array, 0].map((el, ind) => (
          <Pressable
            style={styles.itemPress}
            onPress={() => handleSetValue(el)}
            key={el}
          >
            <View>
              <Text>{el}</Text>
            </View>
          </Pressable>
        ))}
        <Pressable
          style={styles.itemPress}
          onPress={() => handleSetValue(" + ")}
        >
          <View>
            <Text>+</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.itemPress}
          onPress={() => handleSetValue(" - ")}
        >
          <View>
            <Text>-</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.itemPress}
          onPress={() => handleSetValue(" * ")}
        >
          <View>
            <Text>x</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => handleSetValue(" / ")}
          style={styles.itemPress}
        >
          <View>
            <Text>%</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => handleSetValue(" = ")}
          style={styles.itemPress}
        >
          <View>
            <Text>=</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.itemPress}
          onPress={() => handleSetValue("AC")}
        >
          <View>
            <Text>AC</Text>
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

export default Lab03_2;

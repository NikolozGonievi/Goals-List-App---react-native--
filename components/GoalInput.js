import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ visible, onAddGoal, onHide }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function hideModalHandler() {
    onHide();
    setEnteredGoalText("");
  }

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.modal}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="your course goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="cancel"
              color={"#f31282"}
              onPress={hideModalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              disabled={enteredGoalText == ""}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    // marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 12,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "flex-start",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    width: "90%",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});

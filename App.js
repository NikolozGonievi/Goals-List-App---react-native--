import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    hideModalHandler();
  }

  function removeGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals.filter((goal) => goal.id !== goalId),
    ]);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            onHide={hideModalHandler}
          />
        )}
        <Pressable onPress={showModalHandler}>
          <View style={styles.showModalButton}>
            <Text style={styles.showModalButtonText}>add goal</Text>
          </View>
        </Pressable>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={(goalData) => (
              <GoalItem goalData={goalData} onDeleteGoal={removeGoalHandler} />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
  showModalButton: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#a065ec",
    marginBottom: 24,
  },
  showModalButtonText: {
    color: "white",
    textAlign: "center",
  },
});

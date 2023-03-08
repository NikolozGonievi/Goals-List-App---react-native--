import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ goalData, onDeleteGoal }) {
  //   function removeGoalHandler() {
  //     onDeleteGoal(goalData.index);
  //   }

  return (
    <View style={styles.goalItem} key={goalData.item.key}>
      <Pressable
        onPress={onDeleteGoal.bind(this, goalData.item.id)}
        android_ripple={{ color: "#5e0a46" }}
        style={(pressData) => {
          const { pressed } = pressData;
          return pressed && styles.pressedItem;
        }} // android_ripple for iPhone
      >
        <Text style={styles.goalItemText}>{goalData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

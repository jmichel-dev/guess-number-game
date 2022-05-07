import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: Colors.accent500,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;

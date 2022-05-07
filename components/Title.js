import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    marginVertical: 8,
  },
});

export default Title;

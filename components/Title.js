import { Text, StyleSheet } from "react-native";

const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    marginVertical: 8,
  },
});

export default Title;

import { Pressable, Text, StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = (props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ddb52f",
    textAlign: "center",
    fontWeight: "bold",
  },
  iosPressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

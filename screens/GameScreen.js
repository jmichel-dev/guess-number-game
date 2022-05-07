import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>I am a game screen</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

export default GameScreen;

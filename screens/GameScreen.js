import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";

const generateRandomBetween = (min, max, exclude) => {
  const rndNmb = Math.floor(Math.random() * (min, max)) + min;

  if (rndNmb === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNmb;
  }
};

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

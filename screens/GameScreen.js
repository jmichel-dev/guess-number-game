import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";

const generateRandomBetween = (min, max, exclude) => {
  const rndNmb = Math.floor(Math.random() * (max - min)) + min;

  if (rndNmb === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNmb;
  }
};

let minBoundary = 1;
let maxBoundery = 100;

const GameScreen = ({ chosenNumberByUser, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, chosenNumberByUser);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess == chosenNumberByUser) {
      onGameOver();
    }
  }, [currentGuess, chosenNumberByUser, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < chosenNumberByUser) ||
      (direction === "greater" && currentGuess > chosenNumberByUser)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong!", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundery = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundery,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </PrimaryButton>
      </View>
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

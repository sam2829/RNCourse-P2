import { Text, StyleSheet } from "react-native";
import InstructionText from "../components/ui/InsructionText";

function GameOverScreen() {
  return <InstructionText>Game is over!</InstructionText>
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});

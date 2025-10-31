import { StyleSheet, Text } from "react-native";

interface Props {
  name: string;
}

export default function CustomText({ name = "IMPORTANTE" }: Props) {
  return (
    <Text style={styles.container}>
      <Text>
        {name}

        <Text style={{ color: "blue" }}>RESTO DA FRASE!</Text>
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    color: "gray",
  },
});

import { StyleSheet, Text, View } from "react-native";

interface CardProps {
  name: string;
  position: string;
}

export default function CardProfile({ name, position }: CardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
        <Text style={styles.position}>{position}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  position: {
    fontSize: 12,
    color: "darkred",
  },
});

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        Aplicação feita com objetivo de entender melhor sobre as Botões do react
        native
      </Text>

      <TouchableHighlight
        onPress={() => console.log("Pressionado!")}
        underlayColor="black"
      >
        <View style={[styles.button]}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => console.log("Pressionado!")}
        activeOpacity={0.4}
      >
        <View>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback onPress={() => console.log("Pressionado!")}>
        <View style={styles.button3}>
          <Text>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 3, // efeito sombra no Android
  },

  button2: {
    backgroundColor: "red",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 3, // efeito sombra no Android
  },
  button3: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 3, // efeito sombra no Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

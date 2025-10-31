import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const abrirAlerta = () => {
    Alert.alert("Olá!", "Alerta com um botão");
  };

  const abrirAlertaComDoisBotoes = () => {
    Alert.alert(
      "Olá!",
      "Alerta com dois botões",
      [
        { text: "Ok", onPress: () => console.log("Ok") },
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelar"),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const abrirAlertaComTresBotoes = () => {
    Alert.alert(
      "Olá!",
      "Alerta com três botões",
      [
        { text: "Pergunte-me depois", onPress: () => console.log("Depois") },
        { text: "Sim", onPress: () => console.log("Sim") },
        { text: "Não", onPress: () => console.log("Não") },
      ],
      { cancelable: false }
    );
  };

  function sortearAlerta() {
    const alerts = [
      abrirAlerta,
      abrirAlertaComDoisBotoes,
      abrirAlertaComTresBotoes,
    ];
    const sorteado = Math.random() * alerts.length;
    alerts[Math.floor(sorteado)]();
  }

  return (
    <View style={styles.container}>
      <Text>Clique no botão abaixo para ver um alerta!</Text>

      <View style={styles.buttonAlert}>
        <Button title="Sortear Alerta" onPress={sortearAlerta} />
      </View>

      {/* <AlertaPersonalizado /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonAlert: {
    marginTop: 15,
  },
});

import CardProfile from "@/components/CardProfile";
import Counter from "@/components/Counter";
import CustomText from "@/components/CustomText";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Exercicio 1 - Contador simples</Text>
        <Text>Contador</Text>
        <Counter />
      </View>

      <View>
        <Text style={styles.header}>Exercicio 2 - Cartão de Perfil</Text>
        <CardProfile name="Lauanderson" position="Desenvolvedor FullStack" />
      </View>

      <View>
        <Text style={styles.header}>Exercicio 3 - Estilizacao do Text</Text>
        <CustomText name="IMPORTANTE" />
      </View>

      <Link href="/details">View details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});

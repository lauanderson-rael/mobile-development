
import { useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [barStyle, setbBarStyle] = useState("light-content") 

  function toggleStatusbar() {
    if (barStyle == "light-content") {
      setbBarStyle("dark-content")
      StatusBar.setBarStyle("dark-content")
      StatusBar.setBackgroundColor("white")
    } else {
      setbBarStyle("light-content")
      StatusBar.setBarStyle("light-content")
      StatusBar.setBackgroundColor("darkblue")
    } 
   
  }
  

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Text style={{ textAlign: "center", marginBottom: 20  }}>
        Aplicação feita com objetivo de enterder melhor sobre a StatusBar do react native
      </Text>

      <TouchableOpacity style={styles.button} onPress={toggleStatusbar} >
        <Text style={styles.buttonText}>Mudar StatusBar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3, // efeito sombra no Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
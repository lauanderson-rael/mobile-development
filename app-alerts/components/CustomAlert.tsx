import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";

const AlertaPersonalizado = () => {
  const [showAlert, setShowAlert] = useState(false);

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  const hideAlertHandler = () => {
    setShowAlert(false);
  };

  return (
    <View style={styles.container}>
      <Button
        color={"green"}
        title="Mostrar Alerta Personalizado"
        onPress={showAlertHandler}
      />

      <AwesomeAlert
        // Propriedade OBRIGATÓRIA para mostrar/ocultar o alerta
        show={showAlert}
        title="Sucesso no Cadastro!"
        message="Seu perfil foi criado com sucesso. Você será redirecionado."
        // Estilos e Animação
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showProgress={false}
        // Botão de Confirmação (OK)
        showConfirmButton={true}
        confirmText="Entendido"
        confirmButtonColor="#4BB543"
        onConfirmPressed={hideAlertHandler}
        // Propriedades para Personalização
        titleStyle={styles.tituloAlerta}
        messageStyle={styles.mensagemAlerta}
        contentContainerStyle={styles.containerAlerta}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  tituloAlerta: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  mensagemAlerta: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  containerAlerta: {
    borderRadius: 15,
    padding: 20,
  },
});

export default AlertaPersonalizado;

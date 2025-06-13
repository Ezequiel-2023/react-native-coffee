import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import { Image } from 'expo-image';
import { useRouter } from "expo-router";
import { useState } from "react";
import MessageAlert from "./Components/MessageAlert";


const logo = require('../assets/img/logo.jpg');

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<"error" | "success">("error");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const handleButtonClick = () => {
    if (email === "" || password === "") {
      setAlertMessage("Por favor, ingresa todos los campos");
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    setAlertMessage(`Bienvenido, ${email}`);
    setAlertType("success");
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleAcceptAlert = () => {
    setShowAlert(false);
    if (alertType === "success") {
      router.push("/productList");
    }
  };

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={logo}
            style={{ width: 200, height: 100 }}
            contentFit="cover"
          />
        </View>

        <Text style={styles.text}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          placeholderTextColor="#ffffff"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.button}>
          <Button
            title="Iniciar Sesión"
            onPress={() => {handleButtonClick() }}
          />
          <Button
            title="Crear Cuenta"
            onPress={() => { router.push("/register") }}
          />
        </View>

        {showAlert && (
          <MessageAlert
            title={alertType === "error" ? "Atención" : "Éxito"}
            message={alertMessage}
            onClose={handleCloseAlert}
            onAccept={handleAcceptAlert}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#ffffff",
    backgroundColor: "#1c1f22",
    marginTop: 20,
  },
  imageContainer: {
    width: 200,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10, 
  },
});
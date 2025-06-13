import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import { Image } from 'expo-image';
import { useRouter } from "expo-router";

const logo = require('../assets/img/logo.jpg');


export default function Register() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
        source={logo}
        style={{ width: 200, height: 100 }}
        contentFit="cover"
        ></Image>
      </View>
      <Text style={styles.text}>Llena todos los campos</Text>
      <Text style={styles.text}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingesa tu Nombre"
        placeholderTextColor="#ffffff"
        keyboardType="default"
        value=""
      ></TextInput>
      <Text style={styles.text}>Apellido</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingesa tu Apellido"
        placeholderTextColor="#ffffff"
        keyboardType="email-address"
        value=""
      ></TextInput>
      <Text style={styles.text}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingesa tu correo"
        placeholderTextColor="#ffffff"
        keyboardType="email-address"
        value=""
      ></TextInput>
      <Text style={styles.text}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingesa tu contraseña"
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
        value=""
      ></TextInput>
      <View style={styles.button}>
        <Button 
          title="Crear Cuenta"
          onPress={() => {
            Alert.alert("Cuenta creada");
            router.replace("/"); // Vuelve al login
          }}
        />
        
      </View>
    </View>
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
    backgroundColor: "#007bff",
  },
  
});
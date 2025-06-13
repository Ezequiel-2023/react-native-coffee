import { Button, StyleSheet, Text, View } from "react-native";


type MessageAlertProps = {
    title: string;
    message: string;
    onClose: () => void;
    onAccept: () => void;
};

export default function MessageAlert({title, message, onClose, onAccept}: MessageAlertProps) {
    return(
        <View style={styles.alertContainer}>
            <Text style={styles.alertTitle}>{title}</Text>
            <Text style={styles.alertMessage}>{message}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Cerrar" onPress={onClose} />
                <Button title="Aceptar" onPress={onAccept} />
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    alertContainer: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    alertTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    alertMessage: {
      fontSize: 16,
      marginBottom: 20,
    },
  });
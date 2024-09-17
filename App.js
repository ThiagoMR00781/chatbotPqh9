import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [inputMessage, setInputMessage] = useState("")

  const hadleButtonClick = () => {
    console.log(inputMessage)
  }

  const hadleTextInput = (text) => {
    setInputMessage(text)
    console.log(text)
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Os resultados seram mostrados aqui</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, marginLeft: 10, marginBottom: 20 }}>
          <TextInput placeholder='Envie sua pergunta' onChangeText={hadleTextInput}/>
        </View>

        <TouchableOpacity onPress={hadleButtonClick}>
          <View style={{ backgroundColor: 'red', padding: 5, marginRight: 10, marginBottom: 20 }}>
            <Text>Enviar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useContext, useState} from 'react'
import { isLoggedInContext } from '@/context/isLoggedInContext';
import { Redirect } from 'expo-router';
import { useRouter, useFocusEffect } from 'expo-router';


const loginForm: React.FC = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(isLoggedInContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  return (
    <>
      {isLoggedIn ? (
          <Redirect href="/dashboard"/>
      ) : (
        <View style={styles.loginForm}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputWrapper}><TextInput style={styles.textInput} placeholder='Enter your username...' value={username} onChangeText={setUsername}/></View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}><TextInput style={styles.textInput} placeholder='Enter your password...' secureTextEntry value={password} onChangeText={setPassword} /></View>
          <TouchableOpacity activeOpacity={0.7}  onPress={() => {
            if(username === "" || password === ""){
              Alert.alert("Niepoprawne dane", "Nazwa użytkownika i hasło nie mogą być puste",[{text: "OK"}])
            }
            else{
              if(username == "testowe" && password == "testowe"){
                setIsLoggedIn(true);
                router.replace('/dashboard');
              }
              else{
                Alert.alert("Niepoprawne dane", "Login lub hasło są nieprawidłowe",[{text: "OK"}])
              }
            }
          }} style={styles.button}><Text style={styles.buttonText}>SIGN IN</Text></TouchableOpacity>
      </View>
      )}
    </>
  )
}

export default loginForm

const styles = StyleSheet.create({
  loginForm:{
    justifyContent: "center"
  },
  label:{
    marginVertical: 10,
    textAlign: "center"
  },
  textInput:{
    padding: 5,
    backgroundColor: "000",
  },
  button: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  inputWrapper: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#a5b4fc",
    borderStyle: "solid"
  }
})
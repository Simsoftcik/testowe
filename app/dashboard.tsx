import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { isLoggedInContext } from '@/context/isLoggedInContext';
import { Redirect } from 'expo-router';
import { useRouter, useFocusEffect } from 'expo-router';

const dashboard: React.FC = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(isLoggedInContext);
  const router = useRouter();

  return (
    <View style={styles.dashboard}>    
    {isLoggedIn ? (
        <>
          <Text>Jesteś zalogowany</Text>
          <TouchableOpacity activeOpacity={0.7}  onPress={() => {
            setIsLoggedIn(false);
            router.replace('/');
            }} style={styles.button}>
              <Text style={styles.buttonText}>LOG OUT</Text>
            </TouchableOpacity>
        </>        
      ) : (
          <Redirect href="/" />
      )}
    </ View>
  )
}

export default dashboard

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
    width: "50%"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  dashboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
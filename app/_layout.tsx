import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, StatusBar } from 'react-native'
import { useState } from "react";
import { isLoggedInContext } from "@/context/isLoggedInContext";

export default function RootLayout() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return(
    <isLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <StatusBar 
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <SafeAreaView style={styles.SafeAreaView}>
          <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="dashboard" options={{headerShown: false}}/>
          </Stack>
      </SafeAreaView>
    </isLoggedInContext.Provider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView:{
    flex: 1
  }
})

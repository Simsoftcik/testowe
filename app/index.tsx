import { Text, View, StyleSheet } from "react-native";
import LoginForm from "@/components/loginForm";
export default function Index() {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <LoginForm />
      </View>
  );
}


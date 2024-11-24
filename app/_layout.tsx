import { AuthProvider } from "@/context/Authcontext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(auth)/login" options={{title:"login"}}/>
      <Stack.Screen name="(auth)/register" options={{title:"register"}}/>
    </Stack>
    </AuthProvider>
  )


}


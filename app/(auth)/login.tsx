import { FIREBASE_AUTH } from "@/config/FirebaseConfig";
import { Link, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState(""); 
    const router = useRouter();

    const handleLogin = async () => {
        try{
            await signInWithEmailAndPassword (FIREBASE_AUTH, email,password)
            router.replace("/(tabs)/groups")
            console.log("login succesful")
        }catch (error){
            console.error("error logging in", error);
            alert("login failed check credentials.")
            
        }



        console.log("login attempted w/", email, password)
    };


    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={setemail}
            keyboardType="email-address"
            />

            <TextInput 
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={setpassword}
            secureTextEntry
            /> 

            <Button 
            title="login"
            onPress={handleLogin}
            />


            <Link href={"/register"} > 
            <Text> already have an acocunt?</Text>
            </Link>


        </View>
    )



}
const styles = StyleSheet.create ({
    container:{
        flex: 1, 
        justifyContent:'center',
        padding:16,
    },
    input:{
        height:40, 
        borderColor:'grey',
        borderWidth: 1,
        margin:12,
        paddingLeft: 8,
        
    }
})




export default LoginScreen;
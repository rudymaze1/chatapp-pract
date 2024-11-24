import { FIREBASE_AUTH, FIREBASE_DB } from "@/config/FirebaseConfig";
import { Link, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const RegisterScreen = () => {
    const [username, setusername] = useState("");
    const [email,setemail] = useState("");
    const [password, setpassword] = useState(""); 
    const router = useRouter

    const handleregister = async () => {
        try {
            console.log("registration succesfull  w/", username, email, password)
            const useCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email,password)
            await setDoc(doc(FIREBASE_DB, `users/${useCredential.user.uid}`), {
                username, email
            }) 
        } catch (error) {
            console.error("registration error:", error);
            alert("registration failed try again.")
        }
    };


    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder="username"
            value={username}
            onChangeText={setusername}
            />

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
            title="register"
            onPress={handleregister}
            />


            <Link href={"/login"} > 
            <Text> dont have an acocunt?</Text>
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




export default RegisterScreen;
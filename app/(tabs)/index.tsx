import { useAuth } from "@/context/Authcontext"
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const TabsIndex = () => {
    const {user, initialized} = useAuth();
    const router= useRouter();

    
    useEffect(()=>{
        if(initialized){
            if(!user){
                router.replace("/(auth)/login")
            }
        }
    }, [user, initialized, router])

    if(!initialized) {
        return (
            <View> 
                <ActivityIndicator size="large" color="red" />

            </View>
        )
    }

}

export default TabsIndex



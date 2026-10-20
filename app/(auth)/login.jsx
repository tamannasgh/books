import { Link } from "expo-router";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedPressable from "../../components/ThemedPressable";
import ThemedTextInput from "../../components/ThemedTextInput";
import Spacer from "../../components/Spacer";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useUser();


    const handleSubmit = async () => {
        try {
            console.log("login submitted: ", email, password);
            await login(email, password);

        } catch (err) {
            console.log(err);
        }
    };

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView screen={true} style={styles.container}>
            <ThemedText title={true} style={styles.title}>Login to Your Account</ThemedText>
            <Spacer />


            <ThemedTextInput
                placeholder="email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Spacer height={15} />

            <ThemedTextInput
                placeholder="password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Spacer height={25} />

            <ThemedPressable onPress={handleSubmit} style={{ width: "80%", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
            </ThemedPressable>

            <Spacer />

            <Link href={"/register"}><ThemedText>Resister instead</ThemedText></Link>

        </ThemedView>
    </TouchableWithoutFeedback>;

};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default Login;
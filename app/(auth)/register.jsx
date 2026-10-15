import { Link } from "expo-router";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedPressable from "../../components/ThemedPressable";
import ThemedTextInput from "../../components/ThemedTextInput";
import Spacer from "../../components/Spacer";
import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = () => {
        console.log("Register submitted: ", email, password);
    };

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView screen={true} style={styles.container}>
            <ThemedText title={true} style={styles.title}>Register Your Account</ThemedText>
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
                <Text style={{ color: "white", fontSize: 16 }}>Register</Text>
            </ThemedPressable>

            <Spacer />

            <Link href={"/login"}><ThemedText>Login instead</ThemedText></Link>

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

export default Register;
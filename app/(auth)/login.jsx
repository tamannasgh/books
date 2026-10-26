import { Link } from "expo-router";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";

import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedPressable from "../../components/ThemedPressable";
import ThemedTextInput from "../../components/ThemedTextInput";
import Spacer from "../../components/Spacer";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/colors";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false);

    const { login } = useUser();


    const handleSubmit = async () => {
        setBtnDisabled(true);
        setError(null);
        try {
            console.log("login submitted: ", email, password);
            await login(email, password);

        } catch (err) {
            console.log(err.message || "some error occured");
            setError(err.message || "some error occured");
        } finally {
            setBtnDisabled(false);
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

            <ThemedPressable onPress={handleSubmit} disabled={btnDisabled} style={{ width: "80%", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
            </ThemedPressable>
            {error &&
                <>
                    <Spacer height={25} />
                    <Text style={styles.error}>{error}</Text>
                </>}

            <Spacer />

            <Link href={"/register"}><ThemedText>Register instead</ThemedText></Link>

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
    },
    error: {
        color: Colors.warning,
        paddingHorizontal: 10,
        textAlign: "center"
    }
});

export default Login;
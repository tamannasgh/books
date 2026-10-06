import { Link } from "expo-router";
import { StyleSheet } from "react-native";


import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";
import ThemedLogo from "../components/ThemedLogo";

const Index = () => {
    return <ThemedView style={styles.mainCont}>
        <Spacer />
        <ThemedLogo />
        <ThemedText title={true} style={styles.title}>Heyy</ThemedText>
        <Link href={"/login"}><ThemedText>login</ThemedText></Link>
    </ThemedView>;
};

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
    },
    title: {
        fontSize: 24
    }
});

export default Index;
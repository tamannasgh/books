import { useState } from "react";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { useRouter } from "expo-router";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedPressable from "../../components/ThemedPressable";
import Spacer from "../../components/Spacer";
import { useBooks } from "../../hooks/useBooks";
import { Colors } from "../../constants/colors";

const create = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [des, setDes] = useState("");
    const [error, setError] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false);



    const { createBook, books, setBooks } = useBooks();

    const router = useRouter();

    async function handleSubmit() {
        try {
            setError(null);
            setBtnDisabled(true);

            //name of my variables match with names in DB
            const newBook = await createBook({ title, author, des });
            console.log("new book", newBook);
            setBooks(...books, newBook);

            router.navigate("/books");

        } catch (err) {
            console.log(err.message || "some error occured");
            setError(err.message || "some error occured");
        } finally {
            setTitle("");
            setAuthor("");
            setDes("");
            setBtnDisabled(false);

        }
    }

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView screen={true} style={styles.container}>
            <ThemedText title={true} style={{
                fontSize: 24,
                fontWeight: "bold"
            }}>Add New Book!</ThemedText>

            <Spacer />

            <ThemedTextInput
                placeholder="title"
                value={title}
                onChangeText={setTitle} />

            <Spacer height={15} />

            <ThemedTextInput
                placeholder="author"
                value={author}
                onChangeText={setAuthor} />

            <Spacer height={15} />

            <ThemedTextInput
                placeholder="description"
                value={des}
                onChangeText={setDes} />

            <Spacer height={25} />

            <ThemedPressable onPress={handleSubmit} disabled={btnDisabled} style={{ width: "80%", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 16 }}>Add</Text>
            </ThemedPressable>

            {error &&
                <>
                    <Spacer height={25} />
                    <Text style={styles.error}>{error}</Text>
                </>
            }



        </ThemedView>
    </TouchableWithoutFeedback>;
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    error: {
        color: Colors.warning,
        paddingHorizontal: 10,
        textAlign: "center"
    }
});

export default create;
import { FlatList, StyleSheet } from "react-native";

import { useBooks } from "../../hooks/useBooks";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedLoader from "../../components/ThemedLoader";
import Spacer from "../../components/Spacer";
import ThemedBookCard from "../../components/ThemedBookCard";

const books = () => {

    const { loading, books } = useBooks();


    return <ThemedView screen={true}>

        <Spacer height={10} />

        <ThemedText title={true} style={styles.pageTitle}>Your Books</ThemedText>

        <Spacer />

        {loading ?
            <ThemedLoader />
            : //else
            books.length < 1 ?
                <ThemedText>No Books yet, create one</ThemedText>
                :  //else
                <FlatList
                    data={books}
                    keyExtractor={(book) => book.$id}
                    renderItem={({ item: book }) => {
                        return <ThemedBookCard book={book} />;
                    }}
                />

        }
    </ThemedView>;
};

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default books;
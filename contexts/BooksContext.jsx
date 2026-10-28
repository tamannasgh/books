import { createContext, useState, useEffect } from "react";
import { ID, Query } from "react-native-appwrite";

import { tablesDB } from "../lib/appwrite";
import { useUser } from "../hooks/useUser";

const databaseId = "6adf11fa000e98d2174c";
const tableId = "6adf1232003444fd734f";

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useUser();

    async function getAllBooks() {
        try {
            const books = await tablesDB.listRows({
                databaseId,
                tableId,
                queries: [Query.equal("userId", [user?.["$id"]])]
            });
            console.log(books, "from book ctx");
            setBooks(books);

        } catch (err) {
            throw err;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { getAllBooks(); }, [user]);

    async function createBook(data) {
        try {
            const res = await tablesDB.createRow({
                databaseId,
                tableId,
                rowId: ID.unique(),
                //just spreading data as it is becuase they match the names (if i had desc instead of des that i have in DB i would do something like des: data.desc, kepp the names SAME)
                data: { ...data, userId: user?.["$id"] }
            });

            console.log(res);
        } catch (err) {
            throw err;
        }
    }

    function updateBook() {

    }

    function getBookById() {

    }

    function deleteBookById() {

    }


    return <BooksContext.Provider value={{ books, loading, createBook }}>
        {children}
    </BooksContext.Provider>;
}
import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

export const useBooks = () => {
    const ctx = useContext(BooksContext);

    if (!ctx) {
        throw Error("useBooks() nust be used in BooksProvider.");
    }

    return ctx;
};

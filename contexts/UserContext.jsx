import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    async function init() {
        try {
            const loggedInUser = await account.get();
            setUser(loggedInUser);
        } catch (err) {
            //account.get will throw error if no session is there.
            setUser(null);
            console.log(err);
        } finally {
            setAuthChecked(true);
        }
    }

    //running init when page loads for the first time
    useEffect(() => {
        init();
    }, []);


    async function login(email, password) {
        try {
            const userSession = await account.createEmailPasswordSession({ email, password });
            console.log("Session created: ", userSession);
            const loggedInUser = await account.get();
            setUser(loggedInUser);

        } catch (err) {
            throw err;
        }
    }

    async function register(email, password) {
        try {
            const user = await account.create({ userId: ID.unique(), email, password });
            console.log("User created: ", user);
            await login(email, password);
        } catch (err) {
            throw err;
        }
    }

    async function logout() {
        try {
            await account.deleteSession({ sessionId: "current" });
            setUser(null);
        } catch (err) {
            throw err;
        }
    }

    return <UserContext.Provider value={{ user, authChecked, login, logout, register }}>
        {children}
    </UserContext.Provider>;
};
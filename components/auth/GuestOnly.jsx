import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

import ThemedLoader from "../ThemedLoader";
import ThemedView from "../ThemedView";


function GuestOnly({ children }) {

    const router = useRouter();

    const { user, authChecked } = useUser();

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace("/profile");
        }
    }, [authChecked, user]);

    // show loader while we wait for auth to be checked, or while redirecting if user is loggedin
    if (!authChecked || user) {
        return <ThemedView screen={true} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ThemedLoader />
        </ThemedView>;
    }

    return children;
}

export default GuestOnly;
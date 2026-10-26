import { Tabs } from "expo-router";
import { Colors } from "../../constants/colors";
import { useColorScheme, Pressable } from "react-native";
import { Icon, Host } from "@expo/ui";
import UserOnly from "../../components/auth/UserOnly";

const DashboardLayout = () => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme];

    return <UserOnly>
        <Tabs screenOptions={{
            headerShown: false, tabBarStyle: {
                backgroundColor: theme.navBackground,
                height: 60
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor,
            tabBarButton: (props) => (
                <Pressable
                    {...props}
                    android_ripple={{ color: "transparent" }}
                />
            ),
        }}>

            <Tabs.Screen
                name="books"
                options={{
                    title: "Books",
                    tabBarIcon: ({ focused, color }) => {

                        return <Host matchContents>
                            <Icon name={Icon.select({
                                ios: "book",
                                android: import("@expo/material-symbols/book.xml")
                            })}
                                size={20}
                                color={color}
                            />
                        </Host>;
                    }
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: "Create",
                    tabBarIcon: ({ focused, color }) => {

                        return <Host matchContents>
                            <Icon name={Icon.select({
                                ios: "plus.circle",
                                android: import("@expo/material-symbols/add_circle.xml")
                            })}
                                size={20}
                                color={color}
                            />
                        </Host>;
                    }
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused, color }) => {

                        return <Host matchContents>
                            <Icon name={Icon.select({
                                ios: "person",
                                android: import("@expo/material-symbols/person.xml")
                            })}
                                size={20}
                                color={color}
                            />
                        </Host>;
                    }
                }}
            />
        </Tabs>
    </UserOnly>;
};

export default DashboardLayout;
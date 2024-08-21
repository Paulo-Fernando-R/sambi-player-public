import {
    createBottomTabNavigator,
    BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import styles from "./botton-nav-styles";
import appColors from "../global-styles/app-colors";
import Main from "../screens/main/main";
import Favorite from "../screens/favorite/favorite";
import Info from "../screens/info/info";
import { useKeyboard } from "../hooks/useKeyboard";

const Tab = createBottomTabNavigator();
const tabOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveBackgroundColor: appColors.accent,
    tabBarShowLabel: false,
    tabBarItemStyle: styles.tabBarItemStyle,
    tabBarStyle: styles.tabBarStyle,
    tabBarHideOnKeyboard: true,
    
};

export default function Routes() {
    const isKeyboardOpen = useKeyboard();
    tabOptions.tabBarStyle = isKeyboardOpen ? styles.tabBarStyleHide : styles.tabBarStyle;

    return (
        <NavigationContainer>
         
            <Tab.Navigator
                initialRouteName="Main"
                screenOptions={tabOptions}
                sceneContainerStyle={styles.sceneContainerStyle}
            >
                <Tab.Screen
                    name="Main"
                    component={Main}
                    options={{
                        tabBarIcon: () => (
                            <Feather name="headphones" size={30} color={appColors.textLight} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorite"
                    component={Favorite}
                    options={{
                        tabBarIcon: () => (
                            <Feather name="heart" size={30} color={appColors.textLight} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Info"
                    component={Info}
                    options={{
                        tabBarIcon: () => (
                            <Feather name="info" size={30} color={appColors.textLight} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

import { StyleSheet } from "react-native";
import appColors from "../global-styles/app-colors";

const styles = StyleSheet.create({
    tabBarItemStyle: {
        borderRadius: 10,
        height: 42,
        alignSelf: "center",
    },

    tabBarStyle: {
        backgroundColor: appColors.bgBottonNav,
        borderColor: appColors.bgBottonNav,
        paddingHorizontal: 36,
        height: 75,
        marginBottom: 20,
        marginHorizontal: 20,
        position: "absolute",
        borderRadius: 18,
    },

    tabBarStyleHide:{
        backgroundColor: appColors.bgBottonNav,
        borderColor: appColors.bgBottonNav,
        paddingHorizontal: 36,
        height: 75,
        marginBottom: 0,
        marginHorizontal: 20,
        position: "absolute",
        borderRadius: 18,
    },
    sceneContainerStyle:{
       // backgroundColor: "black"
       
       // paddingBottom: -40
    }
});

export default styles;

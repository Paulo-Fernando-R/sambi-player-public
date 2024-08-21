import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import appColors from "../../global-styles/app-colors";
import appTexts from "../../global-styles/app-texts";

const styles = StyleSheet.create({
    hide:{
        display: "none"
    },
    body: {
        position: "absolute",
        bottom: 100,
        left: 20,
        right: 20,
        width: Dimensions.get("screen").width - 40,
        height: 80,
        backgroundColor: appColors.bgPopupPlayer,
        borderRadius: 16,
        overflow: "hidden",
        elevation: 80,
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        paddingRight: 12,
    },
    icon: {
        width: 80,
        height: 80,
        backgroundColor: appColors.bgDark,
        justifyContent: "center",
        alignItems: "center",
    },
    lottie:{
        width: 40,
        height: 40
    },
    content: {
        flex: 1,
        justifyContent: "space-between",
        gap: 4,
        alignItems: "flex-start",
       
    },
    title: {
        ...appTexts.paragraphMRegular,
    },

    slider: { marginLeft: -12, width: "100%" },
});

export default styles;

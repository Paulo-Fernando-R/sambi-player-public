import appTexts from "../../global-styles/app-texts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wave: {
        width: 48,
        height: 48,
        aspectRatio: "1/1",
    },
    header:{
        paddingTop: 56,
        paddingHorizontal: 20,
        flexDirection: "row",
        gap: 8
    },
    headerTxt1: {
        ...appTexts.headLLight
    },
    headerTxt2:{
        ...appTexts.headLRegular
    }
});

export default styles;
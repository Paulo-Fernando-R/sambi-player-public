import appColors from "../../global-styles/app-colors";
import appTexts from "../../global-styles/app-texts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: appColors.bgInput,
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        borderRadius: 16,
        marginHorizontal: 20
    },

    input:{
        ...appTexts.paragraphLRegular
    }
});

export default styles;
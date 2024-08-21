import appColors from "../../global-styles/app-colors";
import appTexts from "../../global-styles/app-texts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        gap: 40,
    },
    subtitle: {
        ...appTexts.headMlight,
        paddingHorizontal: 20,
    },

});

export default styles;

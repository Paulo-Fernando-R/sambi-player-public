import appColors from "../../global-styles/app-colors";
import appTexts from "../../global-styles/app-texts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        gap: 40,
    },
    body: {
        paddingHorizontal: 20,
        gap: 40,
    },
    cards: {
        gap: 20,
    },
    title: {
        ...appTexts.headLLight,
    },

    card: {
        padding: 16,
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 12,
        gap:10
    },

    cardTitle: {
        fontSize: 16,
        color:appColors.textLight
    },
    cardText: {
        fontSize: 16,
        color:appColors.textMediumLight
    }
});

export default styles;

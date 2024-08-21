import appColors from "../../global-styles/app-colors";
import appTexts from "../../global-styles/app-texts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
    },
    iconContainer: {
        backgroundColor: appColors.bgDark,
        width: 54,
        height: 54,
        borderRadius: 54,
        justifyContent: "center",
        alignItems: "center",
    },
    textBox: {
      gap:10,
      flex: 1
    },
    name:{
      ...appTexts.paragraphMRegular
    },
    duration:{
      ...appTexts.paragraphSLight,
      fontSize: 12
    }
});

export default styles;

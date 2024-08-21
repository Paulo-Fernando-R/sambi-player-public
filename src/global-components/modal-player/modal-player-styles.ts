import { StyleSheet } from "react-native"
import appTexts from "../../global-styles/app-texts";
import appColors from "../../global-styles/app-colors";
const styles = StyleSheet.create({
    modal: {
        margin: 0
    },
    page: {
        flex: 1,
    },
    body:{
        paddingTop: 40,
        paddingBottom: 90,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },

    header:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    title:{
        ...appTexts.paragraphLRegular
    },
    animation: {
        width: "100%",
        aspectRatio: "1/1",
        borderRadius: 30,
        backgroundColor: appColors.bgAnimation
    }, 
    lottie:{
        width: "100%",
        height: "100%",
    },
    info:{
        gap: 24,
        width: "100%",
    },
    nameBox:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name:{
        ...appTexts.headMlight
    },
    time:{
        width: "100%",
        gap:12
    },
    timeText:{
        ...appTexts.paragraphLRegular,
        fontSize: 12,
        paddingLeft: 4
    }
});
export default styles;
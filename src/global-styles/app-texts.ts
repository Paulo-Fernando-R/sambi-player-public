import appColors from "./app-colors";
import { TextStyle } from "react-native";

const headLLight: TextStyle = {
    fontSize: 28,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: appColors.textMediumLight,
};

const headLRegular: TextStyle = {
    fontSize: 28,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: appColors.primary,
};

const headMlight: TextStyle = {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "Roboto",
    color: appColors.textLight,
};

const paragraphLRegular: TextStyle = {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: appColors.textMediumLight,
};

const paragraphMRegular: TextStyle = {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: appColors.textLight,
};

const paragraphSLight: TextStyle = {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: appColors.textMediumLight,
};

const appTexts = {
    paragraphLRegular,
    paragraphMRegular,
    paragraphSLight,
    headMlight,
    headLRegular,
    headLLight,
};

export default appTexts;

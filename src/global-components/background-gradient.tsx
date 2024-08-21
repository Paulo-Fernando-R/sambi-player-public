import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import appColors from "../global-styles/app-colors";
import React, { ReactNode } from "react";
import { ViewStyle } from "react-native";

type BackgroundGradientProps = {
    children: ReactNode | undefined;
    style?: ViewStyle
};

export default function BackgroundGradient({ children, style }: BackgroundGradientProps) {
    return (
        <LinearGradient
            colors={appColors.bgGradient}
            locations={[0, 0.51, 1]}
            start={[0.1, 0]}
            end={[0.85, 1]}
            style={{ height: Dimensions.get("window").height, ...style }}
        >
            {children}
        </LinearGradient>
    );
}

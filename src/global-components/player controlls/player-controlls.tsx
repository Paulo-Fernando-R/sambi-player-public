import { View, TouchableOpacity } from "react-native";
import styles from "./player-controlls-styles";
import appColors from "../../global-styles/app-colors";
import Feather from "@expo/vector-icons/Feather";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";

type PlayerControllsProps = {
    size: "small" | "large";
    setIsPauseEnabled?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PlayerControlls({ size, setIsPauseEnabled }: PlayerControllsProps) {
    const style = size === "large" ? styles.controlsLarge : styles.controls;
    const iconSize = size === "large" ? 40 : 24;
    let isPlaying = useIsPlaying().playing ?? false;

    async function play() {
        await TrackPlayer.play();
        if (setIsPauseEnabled !== undefined) setIsPauseEnabled(false);
    }

    async function pause() {
        await TrackPlayer.pause();
        if (setIsPauseEnabled !== undefined) setIsPauseEnabled(true);
    }

    async function next() {
        await TrackPlayer.skipToNext();
        await play();
    }

    async function previous() {
        await TrackPlayer.skipToPrevious();
        await play();
    }

    return (
        <View style={style}>
            <TouchableOpacity onPress={previous}>
                <Feather name="skip-back" size={iconSize} color={appColors.textLight} />
            </TouchableOpacity>

            {!isPlaying ? (
                <TouchableOpacity style={styles.controlButton} onPress={play}>
                    <Feather name="play" size={iconSize} color={appColors.textLight} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.controlButton} onPress={pause}>
                    <Feather name="pause" size={iconSize} color={appColors.textLight} />
                </TouchableOpacity>
            )}

            <TouchableOpacity onPress={next}>
                <Feather name="skip-forward" size={iconSize} color={appColors.textLight} />
            </TouchableOpacity>
        </View>
    );
}

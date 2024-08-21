import styles from "./player-slider-styles";
import appColors from "../../global-styles/app-colors";
import Slider from "@react-native-community/slider";
import TrackPlayer from "react-native-track-player";

type PlayerSliderProps = {
    maxValue: number;
    minValue: number;
    currentValue: number;
};

async function changeTime(time: number) {
    TrackPlayer.seekTo(time);
}

export default function PlayerSlider({ maxValue, minValue, currentValue }: PlayerSliderProps) {
    return (
        <Slider
            maximumValue={maxValue}
            minimumValue={minValue}
            step={1}
            value={currentValue}
            thumbTintColor={appColors.accent}
            maximumTrackTintColor={appColors.accent}
            minimumTrackTintColor={appColors.accent}
            style={styles.slider}
            onSlidingComplete={changeTime}
        />
    );
}

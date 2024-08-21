import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./popup-player-styles";
import appColors from "../../global-styles/app-colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState, useRef, useEffect, useMemo } from "react";
import LottieView from "lottie-react-native";
import note from "../../../assets/lottie/note.json";
import ModalPlayer from "../modal-player/modal-player";
import PlayerControlls from "../player controlls/player-controlls";
import PlayerSlider from "../slider/player-slider";
import TrackPlayer, { useProgress, useActiveTrack, useIsPlaying } from "react-native-track-player";
import { useKeyboard } from "../../hooks/useKeyboard";

export default function PopupPlayer() {
    const [isPaseEnabled, setIsPauseEnabled] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const activeTrack = useActiveTrack();
    const isPlaying = useIsPlaying().playing ?? false;
    const lottie = useRef<LottieView>(null);
    const isKeyboardOpen = useKeyboard();

    const { position, buffered, duration } = useProgress();

    useEffect(() => {
        if (isPlaying) {
            lottie.current?.play();
        } else {
            lottie.current?.pause();
        }
    }, [isPlaying]);

    async function closePlayer() {
        await TrackPlayer.stop();
        setIsPauseEnabled(false);
        await TrackPlayer.reset();
    }

    if(isKeyboardOpen) return null

    if (!isPlaying && activeTrack === undefined) return null;

    return (
        <TouchableHighlight onPress={() => setIsModalVisible(true)} style={styles.body}>
            <>
                <ModalPlayer
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    setIsPauseEnabled={setIsPauseEnabled}
                />

                <View style={styles.icon}>
                    {/* <Fontisto name="music-note" size={32} color={appColors.textLight} /> */}
                    <LottieView source={note} autoPlay loop ref={lottie} style={styles.lottie} />
                </View>

                <View style={styles.content}>
                    <Text numberOfLines={1} style={styles.title}>
                        {activeTrack?.title}
                    </Text>
                    <PlayerSlider maxValue={duration} minValue={0} currentValue={position} />
                    <PlayerControlls size="small" setIsPauseEnabled={setIsPauseEnabled} />
                </View>

                <TouchableOpacity onPress={closePlayer}>
                    <AntDesign name="close" size={20} color={appColors.textMediumLight} />
                </TouchableOpacity>
            </>
        </TouchableHighlight>
    );
}

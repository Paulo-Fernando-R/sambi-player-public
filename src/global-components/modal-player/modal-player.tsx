import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./modal-player-styles";
import BackgroundGradient from "../background-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import LottieView from "lottie-react-native";
import wave from "../../../assets/lottie/waves.json";
import PlayerSlider from "../slider/player-slider";
import PlayerControlls from "../player controlls/player-controlls";
import { useEffect, useRef } from "react";
import { useProgress, useActiveTrack, useIsPlaying } from "react-native-track-player";
import timeConverters from "../../utils/time-converters";
import FavoriteButton from "../favorite-button/favorite-button";
import ModalPlayerController from "./modal-player-controller";
import MusicModel from "../../models/music-model";
import useFavorite from "../../hooks/useFavorite";

type ModalPlayerProps = {
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPauseEnabled?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalPlayer({
    isModalVisible,
    setIsModalVisible,
    setIsPauseEnabled,
}: ModalPlayerProps) {
    
    const controller = new ModalPlayerController();
    const lottie = useRef<LottieView>(null);
    const activeTrack = useActiveTrack();
    const isPlaying = useIsPlaying().playing ?? false;
    const { position, buffered, duration } = useProgress();
    const { isFavorite, performStateAction } = useFavorite(activeTrack?.url ?? "");

    const model = new MusicModel(
        activeTrack?.title ?? "",
        activeTrack?.url ?? "",
        duration,
        isFavorite
    );

    async function save() {
        await controller.save(model, performStateAction);
    }
    async function remove() {
        await controller.remove(model, performStateAction);
    }

    async function getInitialData() {
        await controller.getSaved(activeTrack?.url!, performStateAction);
    }

    useEffect(() => {
        getInitialData()
    },[activeTrack])

    useEffect(() => {
        if (isPlaying) {
            lottie.current?.play();
        } else {
            lottie.current?.pause();
        }
    }, [isPlaying]);

    return (
        <Modal
            onShow={getInitialData}
            isVisible={isModalVisible}
            coverScreen={true}
            animationInTiming={500}
            swipeDirection={"down"}
            onSwipeComplete={() => setIsModalVisible(false)}
            style={styles.modal}
            swipeThreshold={300}
        >
            <BackgroundGradient style={styles.page}>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                            <Ionicons name="chevron-down-sharp" size={30} color="white" />
                        </TouchableOpacity>

                        <Text style={styles.title}>Tocando agora</Text>
                    </View>

                    <View style={styles.animation}>
                        <LottieView
                            ref={lottie}
                            autoPlay={true}
                            loop
                            speed={0.8}
                            source={wave}
                            style={styles.lottie}
                        />
                    </View>

                    <View style={styles.info}>
                        <View style={styles.nameBox}>
                            <Text style={styles.name}>{activeTrack?.title}</Text>
                            <FavoriteButton isFavorite={isFavorite} save={save} remove={remove} />
                        </View>

                        <View style={styles.time}>
                            <PlayerSlider
                                currentValue={position}
                                maxValue={duration}
                                minValue={0}
                            />
                            <Text style={styles.timeText}>
                                {timeConverters.secondsToMinutes(duration - position)}
                            </Text>
                        </View>
                    </View>

                    <PlayerControlls size="large" setIsPauseEnabled={setIsPauseEnabled} />
                </View>
            </BackgroundGradient>
        </Modal>
    );
}

import Routes from "./src/routes/routes";
import TrackPlayer, { Capability, AppKilledPlaybackBehavior } from "react-native-track-player";
import { PlaybackService } from "./src/services/playback-service";
import PopupPlayer from "./src/global-components/popup-player/popup-player";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
    async function initializePlayer() {
        TrackPlayer.registerPlaybackService(() => PlaybackService);
        await TrackPlayer.setupPlayer();

        TrackPlayer.updateOptions({
            android: {
                // This is the default behavior
                appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
            },

            // Media controls capabilities
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop,
            ],

            // Capabilities that will show up when the notification is in the compact form on Android
            compactCapabilities: [Capability.Play, Capability.Pause],
        });
        await SplashScreen.hideAsync();
    }

    useEffect(() => {
        initializePlayer();
    }, []);

    return (
        <>
            <StatusBar barStyle={"light-content"} />
            <Routes />
            <PopupPlayer />
        </>
    );
}

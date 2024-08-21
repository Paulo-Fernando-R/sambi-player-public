import { useState, useEffect } from "react";
import { Text } from "react-native";
import * as MediaLibrary from "expo-media-library";
import BackgroundGradient from "../../global-components/background-gradient";
import styles from "./main-styles";
import Header from "../../global-components/header/header";
import SearchInput from "../../global-components/search-input/search-input";
import List, { ListType } from "../../global-components/list/list";
import MusicModel from "../../models/music-model";
import MainController from "./main-controller";
import onChangeFavoriteEvent from "../../events/onChangeFavorite";

export default function Main() {
    const controller = new MainController();
    const [text, setText] = useState<string>("");
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [assets, setAssets] = useState<MusicModel[]>([]);

    async function getData() {
        controller.getTracks(permissionResponse, requestPermission, setAssets);
    }

    useEffect(() => {
        getData();
        const event = onChangeFavoriteEvent.addListener(async () => await getData());
        return () => {
            onChangeFavoriteEvent.removeListener(event.toString());
        };
    }, []);

    return (
        <BackgroundGradient style={styles.page}>
            <Header />
            <SearchInput setText={setText} />
            <Text style={styles.subtitle}>Minhas músicas</Text>
            <List data={controller.search(text, assets)} listType={ListType.main} />
        </BackgroundGradient>
    );
}

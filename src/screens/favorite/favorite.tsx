import { useState, useEffect } from "react";
import { Text } from "react-native";
import * as MediaLibrary from "expo-media-library";
import BackgroundGradient from "../../global-components/background-gradient";
import styles from "./favorite-styles";
import Header from "../../global-components/header/header";
import SearchInput from "../../global-components/search-input/search-input";
import List, { ListType } from "../../global-components/list/list";
import MusicModel from "../../models/music-model";
import FavoriteController from "./favorite-controller";
import useFavoriteList from "../../hooks/useFavoriteList";

export default function Favorite() {
    const controller = new FavoriteController();
    const [text, setText] = useState<string>("");

    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [assets, setAssets] = useState<MusicModel[]>([]);
    const isListUpdated = useFavoriteList();

    useEffect(() => {
        controller.getTracks(permissionResponse, requestPermission, setAssets);
    }, [isListUpdated]);

    return (
        <BackgroundGradient style={styles.page}>
            <Header />
            <SearchInput setText={setText} />
            <Text style={styles.subtitle}>Favoritas</Text>
            <List data={controller.search(text, assets)} listType={ListType.favorite} />
        </BackgroundGradient>
    );
}

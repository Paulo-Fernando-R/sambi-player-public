import mediaLibraryService from "../../services/media-library-service";
import * as MediaLibrary from "expo-media-library";
import MusicModel from "../../models/music-model";
import favoriteService from "../../services/favorite-service";
import { requestPermissionsAsync, getPermissionsAsync } from "expo-notifications";

export default class MainController {
    constructor() {}

    async getTracks(
        permissionResponse: MediaLibrary.PermissionResponse | null,
        requestPermission: () => Promise<MediaLibrary.PermissionResponse>,
        setAssets: React.Dispatch<React.SetStateAction<MusicModel[]>>
    ) {
        if (!(await this.requestPermisions(permissionResponse, requestPermission))) {
            return;
        }

        const saved = await favoriteService.getAll();
        const tracks = await mediaLibraryService.getTracks();

        if (!saved || saved.length < 1) {
            setAssets(tracks.sort((a, b) => (a.name < b.name ? -1 : 1)));
            return;
        }

        const list: MusicModel[] = [];

        tracks.forEach((e) => {
            saved.forEach((f) => {
                if (e.path === f[0]) {
                    e.isFavorite = true;
                }
            });
            list.push(e);
        });

        setAssets(list.sort((a, b) => (a.name < b.name ? -1 : 1)));
    }

    async requestPermisions(
        permissionResponse: MediaLibrary.PermissionResponse | null,
        requestPermission: () => Promise<MediaLibrary.PermissionResponse>
    ) {
        if (permissionResponse?.status !== "granted") {
            await requestPermission();
        }

        const { status: existingStatus } = await getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== "granted") {
            const { status } = await requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== "granted") {
            return false;
        }
        return true;
    }

    search(text: string, assets: MusicModel[]) {
        if (text.length < 1) {
            return assets;
        }
        return assets.filter((e) => e.name.toLowerCase().includes(text.toLowerCase()));
    }
}

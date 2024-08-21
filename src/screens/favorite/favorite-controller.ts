import mediaLibraryService from "../../services/media-library-service";
import * as MediaLibrary from "expo-media-library";
import MusicModel from "../../models/music-model";
import favoriteService from "../../services/favorite-service";

export default class FavoriteController {
    constructor() {}

    async getTracks(
        permissionResponse: MediaLibrary.PermissionResponse | null,
        requestPermission: () => Promise<MediaLibrary.PermissionResponse>,
        setAssets: React.Dispatch<React.SetStateAction<MusicModel[]>>
    ) {
        if (permissionResponse?.status !== "granted") {
            await requestPermission();
        }
        const saved = await favoriteService.getAll();
        const tracks = await mediaLibraryService.getTracks();

        if (!saved) return;
        let list: MusicModel[] = [];

        for (let i = 0; i < saved.length; i++) {
            for (let j = 0; j < tracks.length; j++) {
                if (saved[i][0] === tracks[j].path) {
                    tracks[j].isFavorite = true;
                    list.push(tracks[j]);
                    tracks.splice(j, 1);
                }
            }
        }
        setAssets(list.sort((a, b) => (a.name < b.name ? -1 : 1)));
    }

    search(text: string, assets: MusicModel[]) {
        if (text.length < 1) {
            return assets;
        }
        return assets.filter((e) => e.name.toLowerCase().includes(text.toLowerCase()));
    }
}

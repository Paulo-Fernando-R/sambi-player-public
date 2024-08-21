import * as MediaLibrary from "expo-media-library";
import MusicModel from "../models/music-model";

async function getTracks(): Promise<MusicModel[]> {
    let aux: MediaLibrary.Asset[] = [];

    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: true,
    });

    for (let i = 0; i < fetchedAlbums.length; i++) {
        if (fetchedAlbums[i].assetCount > 0) {
            aux = aux.concat(await getAlbumAssets(fetchedAlbums[i]));
        }
    }

    return aux.map((e) => MusicModel.fromAssetType(e));
}

async function getAlbumAssets(album: MediaLibrary.Album): Promise<MediaLibrary.Asset[]> {
    const albumAssets = await MediaLibrary.getAssetsAsync({
        album,
        mediaType: MediaLibrary.MediaType.audio,
        first: Number.MAX_SAFE_INTEGER,
    });

    return albumAssets.assets;
}

const mediaLibraryService = {
    getTracks,
};

export default mediaLibraryService;

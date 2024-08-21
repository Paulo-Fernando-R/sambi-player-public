 import * as MediaLibrary from "expo-media-library";
import { Track } from "react-native-track-player";

export default class MusicModel {
    name: string;
    path: string;
    duration: number;
    isFavorite: boolean;

    constructor(name: string, path: string, duration: number, isFavorite: boolean) {
        this.name = name;
        this.path = path;
        this.duration = duration;
        this.isFavorite = isFavorite;
    }

    static fromAssetType(asset: MediaLibrary.Asset): MusicModel {
        return new MusicModel(asset.filename, asset.uri, asset.duration, false);
    }

    toTrack() {
        const track: Track = {
            url: this.path,
            title: this.name,
            duration: this.duration,
        };

        return track;
    }
}

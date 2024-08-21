import MusicModel from "../../models/music-model";
import TrackPlayer from "react-native-track-player";

export default class ListController {
    constructor() {}

    async playTrack(index: number, queue: MusicModel[]) {
        this.setQueue(index, queue);
        TrackPlayer.play();
    }

    async setQueue(index: number, queue: MusicModel[]) {
        if (index === 0) {
            TrackPlayer.setQueue(queue.map((item) => item.toTrack()));
            return;
        }

        const sliced = queue.slice(index, queue.length);
        TrackPlayer.setQueue(sliced.map((item) => item.toTrack()));
    }
}

import MusicModel from "../../models/music-model";
import favoriteService from "../../services/favorite-service";
import onChangeFavoriteEvent from "../../events/onChangeFavorite";

export default class MusicListItemController {
    constructor() {}

    async save(item: MusicModel, setIsFavorite?: (value: boolean) => void) {
        await favoriteService.save(item.path, item.name);
        onChangeFavoriteEvent.emit({ operation: "save", track: item.path });
    }
    async remove(item: MusicModel, setIsFavorite?: (value: boolean) => void) {
        await favoriteService.remove(item.path);
        onChangeFavoriteEvent.emit({ operation: "remove", track: item.path });
    }

    async saveFavorite(item: MusicModel) {
        await favoriteService.save(item.path, item.name);
         onChangeFavoriteEvent.emit({ operation: "save", track: item.path });
    }

    async removeFavorite(
        item: MusicModel,
        removeFromListByIndex: (index: number) => void,
        index: number
    ) {
        await favoriteService.remove(item.path);
        onChangeFavoriteEvent.emit({ operation: "remove", track: item.path });
        removeFromListByIndex(index);
    }
}

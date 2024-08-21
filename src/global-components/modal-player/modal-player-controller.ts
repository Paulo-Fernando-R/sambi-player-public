import MusicModel from "../../models/music-model";
import favoriteService from "../../services/favorite-service";
import onChangeFavoriteEvent from "../../events/onChangeFavorite";

export default class ModalPlayerController {
    constructor() {}

    async save(item: MusicModel, setIsFavorite?: (value: boolean) => void) {
        await favoriteService.save(item.path, item.name);
        onChangeFavoriteEvent.emit({ operation: "save", track: item.path });
        setIsFavorite?.(true);
    }
    async remove(item: MusicModel, setIsFavorite?: (value: boolean) => void) {
        await favoriteService.remove(item.path);
        onChangeFavoriteEvent.emit({ operation: "remove", track: item.path });
        setIsFavorite?.(false);
    }

    async getSaved(key: string, changeState: (value: boolean) => void) {
        const value = await favoriteService.get(key);
        if (value) {
            changeState(true);
        } else {
            changeState(false);
        }
    }
}

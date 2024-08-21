import { useEffect, useState } from "react";
import favoriteService from "../services/favorite-service";
import onChangeFavoriteEvent from "../events/onChangeFavorite";

async function getSaved(key: string, changeState: (value: boolean) => void) {
    const value = await favoriteService.get(key);
   
    if (value) {
        changeState(true);
    } else {
        changeState(false);
    }
}

const useFavorite = (key: string) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const performStateAction = (value: boolean) => setIsFavorite(value);

    useEffect(() => {
        const event = onChangeFavoriteEvent.addListener(
            async () => await getSaved(key, performStateAction)
        );
        return () => {
            onChangeFavoriteEvent.removeListener(event.toString());
        };
    }, [isFavorite]);

    return {
        isFavorite,
        performStateAction,
    };
};

export default useFavorite;

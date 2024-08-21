import { useEffect, useState } from "react";
import onChangeFavoriteEvent from "../events/onChangeFavorite";

const useFavoriteList = () => {
    const [isListUpdated, setIsListUpdated] = useState(true);
    const change = (value: boolean) => setIsListUpdated(value);

    useEffect(() => {
        const event = onChangeFavoriteEvent.addListener((data) => {
            change(false);
        });

        return () => {
            onChangeFavoriteEvent.removeListener(event.toString());
        };
    }, []);

    return {
        isListUpdated,
    };
};

export default useFavoriteList;

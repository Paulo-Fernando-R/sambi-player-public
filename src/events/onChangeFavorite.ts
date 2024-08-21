import { EventRegister } from "react-native-event-listeners";

type onChangeFavoriteData = {
    track: string;
    operation: "save" | "remove";
};

const onChangeFavoriteConfig = { CHANGE_FAVORITE: "CHANGE_FAVORITE" };

/**
 * Emits an event to all listeners that are listening to the CHANGE_FAVORITE event.
 * This event is used to notify the app that the favorite status of a track has changed.
 * The event data is a string with the path of the changed track.
 * @param {string} data - The path of the track that changed its favorite status.
 */
const onChnageFavoriteEventEmmiter = (data: onChangeFavoriteData) =>
    EventRegister.emit(onChangeFavoriteConfig.CHANGE_FAVORITE, data);

/**
 * Registers a callback function to be called whenever the favorite status of a track changes.
 * The callback function will receive the path of the changed track as a string argument.
 * @param {function} callback - A function that will be called when the favorite status of a track has changed.
 * @returns {string} An event key that can be used to remove the listener.
 */
const onChnageFavoriteEventListener = (callback: (message: onChangeFavoriteData) => void) => {
    return EventRegister.addEventListener(onChangeFavoriteConfig.CHANGE_FAVORITE, callback);
};

/**
 * Removes a listener for the CHANGE_FAVORITE event.
 * @param {string} event - The event key returned by onChnageFavoriteEventListener.
 */
const onChnageFavoriteEventRemove = (event: string) => EventRegister.removeEventListener(event);

const onChangeFavoriteEvent = {
    emit: onChnageFavoriteEventEmmiter,
    addListener: onChnageFavoriteEventListener,
    removeListener: onChnageFavoriteEventRemove,
};

export default onChangeFavoriteEvent;

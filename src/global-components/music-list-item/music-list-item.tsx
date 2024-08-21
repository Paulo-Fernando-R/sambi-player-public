import { Text, View, TouchableOpacity } from "react-native";
import styles from "./music-list-item-styles";
import appColors from "../../global-styles/app-colors";
import FavoriteButton from "../../global-components/favorite-button/favorite-button";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MusicModel from "../../models/music-model";
import timeConverters from "../../utils/time-converters";
import MusicListItemController from "./music-list-item-controller";
import { ListType } from "../list/list";

export type MusicListItemProps = {
    itemData: MusicModel;
    index: number;
    changeCurrentIndex: (index: number) => Promise<void>;
    itemType?: ListType;
    removeFromListByIndex: (index: number) => void;
};

type MusicListItemPropsMain = Omit<MusicListItemProps, "removeFromListByIndex">;

//~-------------------------------------------------------------------------------------------------------------------------------------

/**
 * Function component to represent an item in a list.
 * This component will return a specific JSX element based on the itemType parameter.
 * If itemType is ListType.main, it will return a Main component.
 * If itemType is ListType.favorite, it will return a Favorite component.
 * @param {{ itemData: MusicModel, index: number, changeCurrentIndex: (index: number) => Promise<void>, itemType?: ListType, removeFromListByIndex: (index: number) => void }} props
 * @returns {JSX.Element} A JSX element representing the item in the list.
 */
export default function MusicListItem({
    itemData,
    index,
    changeCurrentIndex,
    itemType,
    removeFromListByIndex,
}: MusicListItemProps) {
    switch (itemType) {
        case ListType.main:
            return (
                <Main
                    changeCurrentIndex={changeCurrentIndex}
                    index={index}
                    itemData={itemData}
                    itemType={itemType}
                />
            );
        case ListType.favorite:
            return (
                <Favorite
                    changeCurrentIndex={changeCurrentIndex}
                    index={index}
                    itemData={itemData}
                    itemType={itemType}
                    removeFromListByIndex={removeFromListByIndex}
                />
            );
    }
}

//~-------------------------------------------------------------------------------------------------------------------------------------

/**
 * Function component to represent an item in the main list.
 * @param {MusicListItemPropsMain}} props
 * @returns {JSX.Element} A JSX element representing the item in the main list.
 */
function Main({ itemData, index, changeCurrentIndex }: MusicListItemPropsMain) {
    const controller = new MusicListItemController();

    async function save() {
        await controller.save(itemData, );
    }
    async function remove() {
        await controller.remove(itemData, );
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => changeCurrentIndex(index)}>
            <View style={styles.item}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                        name="music-circle-outline"
                        size={36}
                        color={appColors.primary}
                    />
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.name} numberOfLines={1}>
                        {itemData.name}
                    </Text>
                    <Text style={styles.duration}>
                        Duraçao: {timeConverters.secondsToMinutes(itemData.duration)}
                    </Text>
                </View>

                <FavoriteButton isFavorite={itemData.isFavorite} save={save} remove={remove} />
            </View>
        </TouchableOpacity>
    );
}

//~-------------------------------------------------------------------------------------------------------------------------------------

/**
 * Function component to represent an item in the favorite list.
 * @param {MusicListItemProps}} props
 * @returns {JSX.Element} A JSX element representing the item in the favorite list.
 */
function Favorite({
    itemData,
    index,
    changeCurrentIndex,
    removeFromListByIndex,
}: MusicListItemProps) {
    const controller = new MusicListItemController();

    async function save() {
        await controller.saveFavorite(itemData);
    }
    async function remove() {
        await controller.removeFavorite(itemData, removeFromListByIndex, index);
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => changeCurrentIndex(index)}>
            <View style={styles.item}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                        name="music-circle-outline"
                        size={36}
                        color={appColors.primary}
                    />
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.name} numberOfLines={1}>
                        {itemData.name}
                    </Text>
                    <Text style={styles.duration}>
                        Duraçao: {timeConverters.secondsToMinutes(itemData.duration)}
                    </Text>
                </View>

                <FavoriteButton isFavorite={itemData.isFavorite} save={save} remove={remove} />
            </View>
        </TouchableOpacity>
    );
}

import { FlatList } from "react-native";
import { useIsPlaying } from "react-native-track-player";
import styles from "./list-styles";
import MusicModel from "../../models/music-model";
import ListController from "./list-controller";
import MusicListItem from "../music-list-item/music-list-item";

export enum ListType {
    main = "main",
    favorite = "favorite",
}

type ListProps = {
    data: MusicModel[];
    listType?: ListType;
};

/**
 * Renders a list based on the list type.
 * @param {ListProps} props - The properties for the list.

 * @return {JSX.Element} The list component.
 */
export default function List({ data, listType }: ListProps) {
    switch (listType) {
        case ListType.main:
            return <Main data={data} listType={listType} />;
        case ListType.favorite:
            return <Favorite data={data} listType={listType} />;
    }
}

/**
 * Renders a list with main items.
 *
 * @param {ListProps} props - The properties for the list.
 * @param {MusicModel[]} props.data - The array of MusicModel objects.
 * @param {ListType} [props.listType] - The type of the list. Defaults to main.
 *
 * @return {JSX.Element} The main list component.
 */
function Main({ data, listType }: ListProps) {
    const controller = new ListController();

    const isPlaying = useIsPlaying().playing ?? false;

    async function changeCurrentIndex(index: number) {
        await controller.playTrack(index, data);
    }

    return (
        <FlatList
            contentContainerStyle={[
                styles.list,
                isPlaying ? styles.largePadding : styles.smallPadding,
            ]}
            data={data}
            renderItem={({ item, index }) => (
                <MusicListItem
                    changeCurrentIndex={changeCurrentIndex}
                    index={index}
                    itemData={item}
                    itemType={listType}
                    removeFromListByIndex={() => new Error("Function not implemented.")}
                />
            )}
        />
    );
}

/**
 * Renders a list with favorite items.
 *
 * @param {ListProps} props - The properties for the list.
 * @param {MusicModel[]} props.data - The array of MusicModel objects.
 * @param {ListType} [props.listType] - The type of the list. Defaults to favorite.
 *
 * @return {JSX.Element} The favorite list component.
 */
function Favorite({ data, listType }: ListProps) {
    const controller = new ListController();

    const isPlaying = useIsPlaying().playing ?? false;

    async function changeCurrentIndex(index: number) {
        await controller.playTrack(index, data);
    }

    function removeFromListByIndex(index: number) {
        data.splice(index, 1);
    }

    return (
        <FlatList
            contentContainerStyle={[
                styles.list,
                isPlaying ? styles.largePadding : styles.smallPadding,
            ]}
            data={data}
            renderItem={({ item, index }) => (
                <MusicListItem
                    changeCurrentIndex={changeCurrentIndex}
                    index={index}
                    itemData={item}
                    itemType={listType}
                    removeFromListByIndex={removeFromListByIndex}
                />
            )}
        />
    );
}

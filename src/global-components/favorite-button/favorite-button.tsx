import AntDesign from "@expo/vector-icons/AntDesign";
import appColors from "../../global-styles/app-colors";
import { TouchableOpacity } from "react-native";

type FavoriteButtonProps = {
    isFavorite: boolean;
    save?: () => Promise<void>;
    remove?: () => Promise<void>;
};

export default function FavoriteButton({ isFavorite, save, remove }: FavoriteButtonProps) {
    async function handleFavorite(favState: boolean) {
        if (favState) await save!();
        else await remove!();
    }

    return isFavorite ? (
        <TouchableOpacity onPress={async () => await handleFavorite(false)}>
            <AntDesign name="heart" size={24} color={appColors.accent} />
        </TouchableOpacity>
    ) : (
        <TouchableOpacity onPress={async () => await handleFavorite(true)}>
            <AntDesign name="hearto" size={24} color={appColors.accent} />
        </TouchableOpacity>
    );
}

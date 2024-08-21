import { View, TextInput } from "react-native";
import styles from "./search-input-styles";
import appColors from "../../global-styles/app-colors";
import Feather from '@expo/vector-icons/Feather';

type SearchInputProps = {
    //RETIRAR UNDEFINED
    setText: React.Dispatch<React.SetStateAction<string>> | undefined;
};

export default function SearchInput(props: SearchInputProps) {

    const performSetStateAction = (value: string) => props.setText!(value)
   
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Pesquisar"
                placeholderTextColor={appColors.textMediumLight}
                onChangeText={performSetStateAction}
            />
            <Feather name="search" size={24} color={appColors.textMediumLight} />
        </View>
    );
}

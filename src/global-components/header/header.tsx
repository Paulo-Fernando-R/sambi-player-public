import { Text, View, Image } from "react-native";
import wave from "../../../assets/icons/wave.png";
import styles from "./header-styles";

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.wave} source={wave} />
            <Text style={styles.headerTxt1}>SAMBI</Text>
            <Text style={styles.headerTxt2}>Player</Text>
        </View>
    );
}

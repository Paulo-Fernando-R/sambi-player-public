import { Text, View, Linking, Pressable } from "react-native";
import BackgroundGradient from "../../global-components/background-gradient";
import styles from "./info-styles";
import Header from "../../global-components/header/header";

export default function Info() {
    async function openLinkedin() {
        await Linking.openURL("https://www.linkedin.com/in/paulo-fernando-071bb31a9/");
    }

    async function openRepository() {
        await Linking.openURL("https://github.com/Paulo-Fernando-R/player2");
    }

    return (
        <BackgroundGradient style={styles.page}>
            <Header />
            <View style={styles.body}>
                <Text style={styles.title}>Sobre o APP</Text>

                <View style={styles.cards}>
                    <Pressable onPress={openRepository} style={styles.card}>
                        <Text style={styles.cardTitle}>Repositório</Text>
                        <Text style={styles.cardText}>
                            https://github.com/Paulo-Fernando-R/player2
                        </Text>
                    </Pressable>
                    <Pressable onPress={openLinkedin} style={styles.card}>
                        <Text style={styles.cardTitle}>LinkedIn</Text>
                        <Text style={styles.cardText}>
                            https://www.linkedin.com/in/paulo-fernando-071bb31a9/
                        </Text>
                    </Pressable>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Versão 1.0.0</Text>
                    </View>
                </View>
            </View>
        </BackgroundGradient>
    );
}

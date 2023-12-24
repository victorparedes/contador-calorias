import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import BackButton from "../../atoms/backButton";

const staticInfo = {
    name: 'Victor Paredes',
    avatar: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
}
 
export default ()=> {
    const { canGoBack } = useNavigation()

    return (
        <View style={styles.container}>
            {canGoBack() ? <BackButton /> : undefined }
            <View style={styles.userInfo}>
                <Text style={styles.name}>{`Hola ${staticInfo.name}`}</Text>
                <Text style={styles.welcomeMessage}>Welcome back to your goal!</Text>
            </View>
            <View style={styles.avatarContainer}>
                <Image source={{uri: staticInfo.avatar}} style={styles.avatar}/>
            </View>
        </View>
    )
};

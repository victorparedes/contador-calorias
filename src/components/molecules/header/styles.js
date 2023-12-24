import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    userInfo: {
        flex: 1,
        alignItems: 'flex-start'
    },
    avatarContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    name: {
        fontWeight: 'bold',
    },
    welcomeMessage: {
        color: '#808080',
    }
});
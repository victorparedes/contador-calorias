import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 40,
    },
    leftContainer:{
        flex: 1,
        alignItems: 'flex-start',
    },
    rightContainer:{
        flex: 1,
        alignItems: 'flex-end',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25
    },
});

import { View, Text } from "react-native";
import { Button, Icon } from '@rneui/themed';

import styles from "./styles";

const LegendWithButton = ({handleOnPress, legend})=> {

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer} >
                <Text style={styles.text}>{legend}</Text>
            </View>
            <View style={styles.rightContainer} >
                <Button radius="lg" color="#4ecb71" onPress={handleOnPress}>
                    <Icon name="add-circle-outline" color="#fff" />
                </Button>
            </View>
        </View>
    )    
};

export default LegendWithButton;

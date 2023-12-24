import { View, Text } from "react-native";
import { Button, Icon } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const AddCalories = ()=> {
    const {navigate} = useNavigation()
    
    const handleAddCaloriesPress = ()=> {
        navigate('AddFood')
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer} >
                <Text style={styles.text}>Calories</Text>
            </View>
            <View style={styles.rightContainer} >
                <Button radius="lg" color="#4ecb71" onPress={handleAddCaloriesPress}>
                    <Icon name="add-circle-outline" color="#fff" />
                </Button>
            </View>
        </View>
    )    
};

export default AddCalories;

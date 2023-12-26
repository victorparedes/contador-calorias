import { View, Text } from "react-native";

import Header from "../../molecules/header";
import LegendWithButton from "../../molecules/legendWithButton";

import styles from "./styles";

const FoodList = () => {
    const handleAddCreateFood = ()=> {
        console.log('FoodList')
    };

    return (
        <View style={styles.container}>
            <Header />
            <LegendWithButton handleOnPress={handleAddCreateFood} legend={'Add food'}/>
            <Text>Hola! soy Agregar comida</Text>
        </View>
    )
};

export default FoodList;

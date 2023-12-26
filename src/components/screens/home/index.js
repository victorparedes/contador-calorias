import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../molecules/header";
import LegendWithButton from "../../molecules/legendWithButton";

import styles from "./styles";

const Home = ()=> {
    const {navigate} = useNavigation()
    
    const handleAddCaloriesPress = ()=> {
        navigate('FoodList')
    };
        
    return (
        <View style={styles.container}>
            <Header />
            <LegendWithButton handleOnPress={handleAddCaloriesPress} legend={'Calories'} />
        </View>
    )    
};

export default Home;

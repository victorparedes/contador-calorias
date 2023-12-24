import { View } from "react-native";

import Header from "../../molecules/header";
import AddCalories from "../../molecules/addCalories";
import styles from "./styles";

const Home = ()=> {
    return (
        <View style={styles.container}>
            <Header />
            <AddCalories />
        </View>
    )    
};

export default Home;

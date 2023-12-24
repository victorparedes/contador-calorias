import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/components/screens/home';
import AddFood from './src/components/screens/addFood'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='AddFood' component={AddFood} options={{headerShown: false}} />
      </Stack.Navigator>
      </NavigationContainer> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
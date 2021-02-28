import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/HomePage/HomePage';
import ProductDetailScreen from '../screens/ProductDetails/ProductDetails';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

function AppNavigation() {
    const [isLogin, setLoginStats] = React.useState(false);
    const [isLoading, setLoding] = React.useState(true);

    AsyncStorage.getItem('loginStatus').then((res) => {
        setLoginStats(res);
        setLoding(false);
    })


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#259F59" />
            </View>
        );
    }
    else if (isLogin) {
        return (
            <NavigationContainer >
                <Stack.Navigator
                    // headerMode={'none'}
                    screenOptions={{ gestureEnabled: true }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    else {
        return (
            <NavigationContainer >
                <Stack.Navigator
                    // headerMode={'none'}
                    screenOptions={{ gestureEnabled: true }}
                >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default AppNavigation;
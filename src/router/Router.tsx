import React from 'react'
import Home from '../screens/Home/Home'
import ProductDetail from '../screens/ProductDetail/ProductDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabNavigator } from './navigators'

export type RootStackParamList = {
    BottomTab: undefined
    Home: undefined
    ProductDetail: { productId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Router: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName='BottomTab'>
            <Stack.Screen
                name='BottomTab'
                component={BottomTabNavigator}
                options={{
                    title: 'Bottom Tab',
                }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name='ProductDetail'
                component={ProductDetail}
                options={{
                    title: 'Product Detail',
                }}
            />
        </Stack.Navigator>
    )
}

export default Router
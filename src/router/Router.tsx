import React from 'react'
import Home from '../screens/Home/Home'
import ProductDetail from '../screens/ProductDetail/ProductDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
    Home: undefined
    ProductDetail: { productId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Router: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
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
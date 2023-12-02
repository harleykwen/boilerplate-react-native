import React from 'react'
import Home from '../../screens/Home/Home'
import Profile from '../../screens/Profile/Profile'
import BottomTabItem from './BottomTabItem'
import { IC_HOME } from '../../assets'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export type BottomTabNavigatorParams = {
    Home: undefined
    Profile: undefined
}

const Tab = createBottomTabNavigator<BottomTabNavigatorParams>()

const BottomTabNavigator: React.FC = () => {
    return (
        <Tab.Navigator 
            tabBar={(props: any) => <BottomTabItem {...props} />}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{ tabBarIcon: IC_HOME }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{ tabBarIcon: IC_HOME }} 
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
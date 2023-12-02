import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Platform,
} from 'react-native'
import { 
    IC_ERROR, 
    IC_HOME, 
    IC_PERSON, 
} from '../../assets'

const BottomTabItem: React.FC = (props: any) => {
    const { 
        state, 
        descriptors, 
        navigation, 
    } = props

    return (
        <View style={styles.bottomTabs}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name

                const isFocused = state.index === index

                const Icon = () => {
                    if (label === 'Home') {
                        return isFocused ? <IC_HOME height={24} fill="#673ab7" /> : <IC_HOME height={24} fill="#222" />
                    }
                    if (label === 'Profile') {
                        return isFocused ? <IC_PERSON height={24} fill="#673ab7" /> : <IC_PERSON height={24} fill="#222" />
                    }
                    return <IC_ERROR height={24} />
                }

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.bottomTab}
                    >
                        <Icon />
                        <Text style={[{ color: isFocused ? '#673ab7' : '#222' }, styles.bottomTabLabel]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    bottomTabs: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 60,
        paddingHorizontal: 8,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    bottomTab: {
        flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTabLabel: {
        fontSize: 12,
    }
})

export default React.memo(BottomTabItem)
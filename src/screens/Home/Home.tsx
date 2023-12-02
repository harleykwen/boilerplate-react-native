import React from 'react'
import { 
    View, 
    Button, 
    StyleSheet
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router/Router'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <Button
                title='Go to Product Detail'
                onPress={() => navigation.navigate('ProductDetail', { productId: '1' })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    }
})

export default Home
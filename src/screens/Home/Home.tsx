import React from 'react'
import { 
    View, 
    Text, 
    Button, 
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router/Router'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
    return (
        <View>
            <Text>Home</Text>
            <Button
                title='Go to Product Detail'
                onPress={() => navigation.navigate('ProductDetail', { productId: '1' })}
            />
        </View>
    )
}

export default Home
import React from 'react'
import { 
    View, 
    Text, 
    Button, 
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router/Router'

type ProductDetailProps = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }: ProductDetailProps) => {
    const { productId } = route?.params

    return (
        <View>
            <Text>ProductDetail</Text>
            <Text>Product ID: {productId}</Text>
            <Button
                title='Back to Home Screen'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default ProductDetail
import React from 'react'
import { 
    View, 
    Button,
    StyleSheet, 
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router/Router'

type ProductDetailProps = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }: ProductDetailProps) => {
    const { productId } = route?.params

    return (
        <View style={styles.container}>
            <Button
                title='Back to Home Screen'
                onPress={() => navigation.goBack()}
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

export default ProductDetail
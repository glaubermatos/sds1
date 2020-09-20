import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

const Header = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.goBack();
    }

    return (
        <TouchableWithoutFeedback onPress={handleOnPress} >
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
            
                    <Text style={styles.textLogo1}>Big Game</Text>
                    <Text style={styles.textLogo2}>Survey</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Header;
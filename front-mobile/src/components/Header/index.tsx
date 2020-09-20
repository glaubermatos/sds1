import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../../assets/logo.png')} />
            <Text style={styles.textLogo1}>Big Game</Text>
            <Text style={styles.textLogo2}>Survey</Text>
        </View>
    )
}

export default Header;
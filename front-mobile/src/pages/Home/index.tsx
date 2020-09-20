import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { View, Text, Image, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../../components/Header';

const Home = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('CreateRecord');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image 
                source={require('../../assets/gamer.png')}
                style={styles.gamerImage}  
                />
                <Text style={styles.title}>Vote agora!</Text>
                <Text style={styles.subTitle}>Nos diga qual é seu jogo favorito!</Text>
            </View>
            <View style={styles.footer}>
                <RectButton 
                  style={styles.button}
                  onPress={handleOnPress}  
                >
                    <Text style={styles.buttonText}>
                        COLETAR DADOS
                    </Text>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="chevron-right" color="#FFF" size={25} />
                        </Text>
                    </View>
                </RectButton>
            </View>
        </>
    )
}

export default Home;
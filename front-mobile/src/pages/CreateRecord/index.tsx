import React, { useState, useEffect } from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { Text, View, TextInput, Alert } from 'react-native';
import Header from '../../components/Header';
import styles, { pickerSelectStyle } from './styles';
import PlatformCard from './PlatformCard';
import RNPickerSelect from 'react-native-picker-select';
import { GamePlatform, Game } from './types';
import axios from 'axios';
import { RectButton } from 'react-native-gesture-handler';

const BASE_URL = 'http://192.168.1.106:8080';

const mapSelectValues = (games: Game[]) => {
    return games.map(game => {
        return ({
            ...game, 
            label: game.title, 
            value: game.id
        });
    })
}

const CreateRecord = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/games`)
            .then(response => {
                const selectValues = mapSelectValues(response.data);
                setAllGames(selectValues)
            })
            .catch(() => Alert.alert('Não foi possível listar os games, favor tente mais tarde!'));
    }, []);

    const handleChangePlatform = (selectedPlatform: GamePlatform) => {
        setPlatform(selectedPlatform);
        const gamesByPlatform = allGames.filter(game => game.platform === selectedPlatform);
        setFilteredGames(gamesByPlatform);
    }

    const handleSubmit = () => {
        const payload = {name, age, gameId: selectedGame};
        axios.post(`${BASE_URL}/records`, payload)
            .then(() => {
                Alert.alert('Obrigado por responder a pesquisa');
                setName('');
                setAge('');
                setSelectedGame('');
                setPlatform(undefined);
            })
            .catch(() => Alert.alert('Não foi possível salvar pesquisa, por favor tente mais tarde!'));
    }

    const placeholder = {
        label: 'Selecione um jogo',
        value: null
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <TextInput 
                  style={styles.inputText}
                  placeholder="Nome"
                  placeholderTextColor="#9E9E9E"
                  value={name}
                  onChangeText={value => setName(value)}
                />
                <TextInput
                  keyboardType="numeric"
                  maxLength={3}
                  style={styles.inputText}
                  placeholder="Idade"
                  placeholderTextColor="#9E9E9E"
                  value={age}
                  onChangeText={value => setAge(value)}
                />
                <View style={styles.platformContainer}>
                    <PlatformCard 
                    platform="PC" 
                    icon="laptop"
                    activePlatform={platform}
                    onChange={handleChangePlatform}  
                    />
                    <PlatformCard 
                    platform="XBOX" 
                    icon="xbox"
                    activePlatform={platform}
                    onChange={handleChangePlatform}  
                    />
                    <PlatformCard 
                    platform="PLAYSTATION" 
                    icon="playstation"
                    activePlatform={platform}
                    onChange={handleChangePlatform}  
                    />
                </View>
                <RNPickerSelect 
                  onValueChange={(value) => setSelectedGame(value)}
                  placeholder={placeholder}
                  value={selectedGame}
                  items={filteredGames}
                  style={pickerSelectStyle}
                  Icon={() => {
                      return <Icon name="chevron-down" color="#9E9E9E" size={25} />
                  }}
                />
                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>
                            SALVAR
                        </Text>
                    </RectButton>
                </View>
            </View>
        </>
    )
}

export default CreateRecord;
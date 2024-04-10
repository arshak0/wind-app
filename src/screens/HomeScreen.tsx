import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, SafeAreaView, Button, Alert } from 'react-native';
import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';
import ListItem from '../components/ListItem/ListItem.tsx';

export default function HomeScreen() {
    const [value, setValue] = useState();
    // const [listOfItems, setListOfItems] = useState([
    //     {text: 'First Item', index: 1},
    //     {text: 'Second Item', index: 2},
    // ]);

    const onChange = (text) => {
        setValue(text);
    }
    const handleTextPress = () => {
        Alert.alert('Мишутка нажат', 'Поздравляю с нажатием Мишутки', [
            {
                text: 'Нажимай потом',
                onPress: () => console.log('Нажимай потом pressed'),
            },
            {

                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text numberOfLines={1} style={styles.text}>Страница Мишутки</Text>
            <Button title={'Нажми на Мишутку'} onPress={handleTextPress}/>
            <StatusBar style="auto" />
            <Text>Firstfff React Native app</Text>
            <Text>Lilitka & Mishutka</Text>
            <StatusBar style="auto" />
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Мишутка'/>
            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aquamarine',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '17px',
    },
    text: {
        color: 'red'
    },
    input: {
        borderWidth: 5,
        borderColor: '#787877',
        padding: 10
    }
});

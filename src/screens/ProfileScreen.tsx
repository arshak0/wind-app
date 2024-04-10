import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert } from 'react-native';

export default function ProfileScreen() {
    const handleTextPress = () => {
        Alert.alert('Мишутка нажата', 'Поздравляю с нажатием Мишутки', [
            {
                text: 'Ask me jlater',
                onPress: () => console.log('Ask me later pressed'),
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
            <Text numberOfLines={1} style={styles.text}>Open up App.js to start working on your app!</Text>
            <Button title={'Нажми на Мишутку'} onPress={handleTextPress}/>
            <StatusBar style="auto" />
            <Text>Firstfff React Native app</Text>
            <Text>Lilitka & Mishutka</Text>
            <StatusBar style="auto" />
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
    }
});

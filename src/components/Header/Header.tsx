import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, SafeAreaView, Button, Alert } from 'react-native';


export default function Header() {

    return (
        <Text numberOfLines={1} style={styles.text}>Windy app</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'red'
    }
});

import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';


export default function Footer() {

    return (
        <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    footer: {
        color: 'green',
        position: 'absolute',
        bottom: 100,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    text: {
        color: 'green',
    }
});
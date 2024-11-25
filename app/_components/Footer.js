import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Footer = () => {
    return (
        <View style={styles.footer}>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
    },
});
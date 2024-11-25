import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Name: incredibletodolistapp</Text>
            
            <TouchableOpacity onPress={() => Alert.alert('Hello!', 'You clicked on my name!!')}>
                <Text style={styles.text}>Author: Quan Huynh</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Date: November 24, 2024</Text>

        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "azure",
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        fontWeight: "bold",
        fontSize: "20",
        margin: 5,
    },
});
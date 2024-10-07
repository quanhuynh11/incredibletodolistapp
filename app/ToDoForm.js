import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native'
import React from 'react'

const ToDoForm = () => {
    return (
        <SafeAreaView>
            <CustomForm placeholderText={"Add a new task..."} buttonText={"Add"} />
        </SafeAreaView>
    );
};

export default ToDoForm

// CustomForm child component
const CustomForm = ({ placeholderText, buttonText }) => {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder={placeholderText}
            />
            <Button title={buttonText} />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
})
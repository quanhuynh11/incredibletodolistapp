import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const ToDoForm = ({ addTaskFunc }) => {


    return (
        <SafeAreaView>
            <CustomForm placeholderText={"Add a new task..."} buttonText={"Add"} addTaskFunc={addTaskFunc} />
        </SafeAreaView>
    );
};

export default ToDoForm

// CustomForm child component
const CustomForm = ({ placeholderText, buttonText, addTaskFunc }) => {

    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if(taskText) {
            addTaskFunc(taskText);
            setTaskText('');
        };
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder={placeholderText}
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title={buttonText} onPress={handleAddTask} />
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
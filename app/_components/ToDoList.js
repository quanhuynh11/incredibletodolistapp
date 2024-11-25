import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
} from 'react-native';
const ToDoList = ({ tasks }) => {
    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <Pressable>
                        <Task taskList={tasks}/>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ToDoList

// Task child component
const Task = ({ taskList }) => {
    return (
        <View>
            {
                taskList.map( (task) => (<Text key={task}>{task}</Text>) )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});
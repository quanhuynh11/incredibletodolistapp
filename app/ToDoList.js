import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
} from 'react-native';
const ToDoList = () => {
    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <Pressable>
                        <Task taskName={"Do Laundry"}></Task>
                    </Pressable>
                    <Pressable>
                        <Task taskName={"Go to Gym"}></Task>
                    </Pressable>
                    <Pressable>
                        <Task taskName={"Walk Dog"}></Task>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ToDoList

// Task child component
const Task = ({ taskName }) => {
    return (
        <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>{taskName}</Text>
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
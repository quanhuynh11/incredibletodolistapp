import { StyleSheet, Text, View } from "react-native";
import ToDoList from "./_components/ToDoList";
import ToDoForm from "./_components/ToDoForm";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { Button } from "react-native-web";

import MainLayout from "./layouts/mainlayout";

export default function Page() {

  const navigator = useNavigation();

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Add new task to the list
  const addTask = (task) => {
    if(!tasks.includes(task.trim())) {
      setTasks([...tasks, task]);
    }
  };

  return (
    <MainLayout>
        <ToDoList tasks={tasks}/>
        <ToDoForm addTaskFunc={addTask} />

        <View style={{ margin: 50 }}>
          <Button title="Go to About" onPress={() => navigator.navigate("about")} />
        </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
});

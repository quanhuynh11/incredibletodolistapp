import { StyleSheet, Text, View } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { useState } from "react";


export default function Page() {

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
    <View>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTaskFunc={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
});

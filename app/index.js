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

  return (
    <View>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </View>
  );
}

const styles = StyleSheet.create({
});

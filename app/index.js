import { StyleSheet, Text, View } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

export default function Page() {
  return (
    <View>
      <ToDoList />
      <ToDoForm />
    </View>
  );
}

const styles = StyleSheet.create({
});

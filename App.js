import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  return (
    <View style={styles.container}>
      {/* Today Task */}

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today Task</Text>
        <View style={styles.items}>
        {
          taskItems.map((item, index) => (
            <Task key={index} text={item}/>
          ))
        }
        </View>

      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Tuliskan sesuatu"} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80, 
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    padding: 15,
    bottom: 60,
    width: "100%", 
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:1,
    borderColor: "#C0C0C0",
  }
});

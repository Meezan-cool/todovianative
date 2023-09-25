// import React, { useState } from 'react';
// import { Text, View, Button } from 'react-native';

// const App = () => {
//   // Step 2: Initialize a state variable for the counter
//   const [counter, setCounter] = useState(0);

//   // Step 3: Create functions to increment and decrement the counter
//   const incrementCounter = () => {
//     setCounter(counter + 1);
//   };

//   const decrementCounter = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };

//   return (
//     <View
//       style={{
//         minHeight: '100%',
//         width: '100%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Text style={{ fontSize: 20 }}>Counter App</Text>
//       {/* Step 4: Display the counter value */}
//       <Text style={{ fontSize: 20 }}>Counter: {counter}</Text>

//       {/* Step 4: Buttons to increment and decrement the counter */}
//       <View style={{ flexDirection: 'row', marginTop: 20 }}>
//         <Button title="Increment" onPress={()=>setCounter(counter+1)} />
//         <Button title="Decrement" onPress={()=>counter>0?setCounter(counter-1):setCounter(counter)} />
//       </View>
//     </View>
//   );
// };

// export default App;
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, TextInput, Button, FlatList, TouchableOpacity,Image } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the list
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      // console.warn(task)
      setTask('');
    }
  };

  // Function to mark a task as completed
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((t) => {
      console.log(id)
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <View style={{ flex: 1, padding: 20 ,paddingTop:50}}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Todo App</Text>
      {/* <Icon name="rocket" size={30} color="#900" />; */}
        {/* <View style={{flexDirection:'row',gap:10}}>
        <Image source={require('./Image/naruto-sage.jpg')} style={{width:'50%',height:150,objectFit:'contain',borderRadius:10, marginBottom: 20 }}/>
      <Image source={require('./Image/naruto-young.jpg')} style={{width:'50%',height:150,objectFit:'contain',borderRadius:10, marginBottom: 20 }}/>

        </View> */}
      {/* Input to add a new task */}
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ flex: 1, marginRight: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Add" onPress={addTask} />
      </View>

      {/* List of tasks */}
      <FlatList
        style={{ marginTop: 20 }}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTask(item.id)}  style={{ flexDirection: 'row' ,alignItems:'center',gap:50}}>
            <Text style={{ fontSize: 18, textDecorationLine: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </Text>
            <Button title="Delete" onPress={() => deleteTask(item.id)} color="red" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default App;

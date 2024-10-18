import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, FlatList, Modal, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState<string[]>(['hello world'])
  const [modalVisible, setModalVisible] = useState(false);
  const [updateInput, setUpdateInput] = useState('')
  const [index, setIndex] = useState(0)


  // addtodo
  const addTodo = () => {
    console.log(input);
    todo.push(input);
    setTodo([...todo])
    setInput('')
  }

  // deleteTodo
  const deleteTodo = (index: number) => {
    console.log('todo deleted', index)
    todo.splice(index, 1);
    setTodo([...todo])
  }

  const editTodo = (index: number) => {
    console.log(updateInput, index)
    todo.splice(index , 1 , updateInput)
    setTodo([...todo])
    setModalVisible(false)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10
      }}>Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder='enter todo '
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text>Press Here</Text>
      </TouchableOpacity>

      {todo.length > 0 ? <FlatList
        style={{ marginTop: 20 }}
        data={todo}
        renderItem={({ item, index }) => {
          return <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
            <TouchableOpacity style={styles.ListBtn} onPress={() => deleteTodo(index)}
              activeOpacity={0.5}
            >
              <Text>delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ListBtn} onPress={() => {
              setIndex(index)
              setModalVisible(true)
            }}>
              <Text>edit</Text>
            </TouchableOpacity>
          </View>
        }}
        keyExtractor={(item, index) => index.toString()}
      /> : <Text style={{ ...styles.title, color: 'black', margin: 20 }}>No Todo Found...</Text>}


      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Todo!</Text>
              <TextInput
                style={styles.updateInput}
                onChangeText={setUpdateInput}
                value={updateInput}
              />
              <Pressable
                style={[styles.modalBtn, styles.buttonClose]}
                onPress={() => editTodo(index)}>
                <Text style={styles.textStyle}>Update Todo</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    marginHorizontal: 40,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
  },
  updateInput: {
    margin: 20,
    width: 200,
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 120
  },
  item: {
    backgroundColor: '#000000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center'
  },
  ListBtn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBtn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default Home
// import { View, Text, SafeAreaView, TextInput, StyleSheet, Button, FlatList } from 'react-native'
// import React from 'react'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from '@/config/firebase/config';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '@/config/redux/reducers/todoSlice';
// import { collection, addDoc } from "firebase/firestore";



// const Home = () => {
//   const [email, onChangeEmail] = React.useState('');
//   const [password, onChangePassword] = React.useState('');


//   // use dispatch for sending data
//   const dispatch = useDispatch()

//   const registerUser = async () => {
//     console.log(email)
//     console.log(password)
//     dispatch(addTodo({
//       title: email
//     }))

//     // createUserWithEmailAndPassword(auth, email, password)
//     //   .then((userCredential) => {
//     //     const user = userCredential.user;
//     //     console.log(user)
//     //   })
//     //   .catch((error) => {
//     //     const errorMessage = error.message;
//     //     console.log(errorMessage)
//     //   });

//       try {
//         const docRef = await addDoc(collection(db, "users"), {
//           first: "Ada",
//           last: "Lovelace",
//           born: 1815
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//   }


//   // get data from redux
//   const selector = useSelector((state: any) => state.todo);
//   console.log(selector);

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView>
//         <Text style={{ textAlign: 'center', fontSize: 20, margin: 20 }}>Register User</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={onChangeEmail}
//           placeholder="Enter your Email"
//           value={email}
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={onChangePassword}
//           value={password}
//           placeholder="Enter your password"
//           secureTextEntry={true}
//         />
//         <View style={{ margin: 20 }}>
//           <Button
//             title="Press me"
//             onPress={registerUser}
//           />
//         </View>

//         <View>
//           <FlatList
//             data={selector}
//             renderItem={({ item }) => {
//               return <View style={styles.item}>
//                 <Text style={styles.title}>{item.title}</Text>
//               </View>
//             }}
//             keyExtractor={item => item.id}
//           />
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   )
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   container: {
//     flex: 1,
//     marginTop: 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default Home




import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [show , setShow] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
     {show &&  <CameraView style={styles.camera} facing={facing} flash='on'>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>}
      <TouchableOpacity onPress={()=> setShow(!show)}>
        <Text>Show Camera</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       className="flex-1 justify-center items-center"
//     >
//       <Text className="text-center bg-red-400 p-[2rem]">Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }




import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState<null | any>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);

    })();
  }, []);

  // function hello(){
  //   console.log('hello world')
  // }
  // hello()

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      {location && <MapView style={styles.map} initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0001,
        longitudeDelta: 0.0001,
      }}> 
      <Marker coordinate={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }}/>
      
      </MapView>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }
});

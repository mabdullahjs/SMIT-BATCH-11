import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'red'
          },
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              backgroundColor: 'gray',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 20
            } : null}>
              <MaterialCommunityIcons name="home" size={28} color="black" />
            </View>
          }
        }}
      />

      <Tabs.Screen
        name="profiles"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              backgroundColor: 'gray',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 20
            } : null}>
              <FontAwesome size={28} name="user" color={'black'} />
            </View>
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              backgroundColor: 'gray',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 20
            } : null}>

              <FontAwesome size={28} name="cog" color={'black'} />
            </View>
          }
        }}
      />
    </Tabs>
  );
}
import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  // console.log("hello react native")
  // alert("hello")
  return (
    <>
      <View style={{
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 30
        }}>Home</Text>

        <Link href={'about'} style={{
          fontSize: 20
        }}>About</Link>
        <Link href={'contact'} style={{
          fontSize: 20
        }}>contact</Link>
        <Link href={'services'} style={{
          fontSize: 20
        }}>services</Link>
      </View>
    </>
  )
}

export default Home
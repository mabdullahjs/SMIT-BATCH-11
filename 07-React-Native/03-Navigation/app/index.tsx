import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler';

interface Item {
    name: string;
    id: number
}

const index = () => {

    const [users, setUsers] = useState<null | []>(null)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setUsers(json)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <ScrollView>
            <Text>index</Text>
            {loading && <Text>Loading...</Text>}

            {error && <Text>Error occured</Text>}

            {users && users.map((item: Item)=>{
                return <View style={styles.item} key={item.id}>
                    <Text >{item.name}</Text>
                </View>
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default index
import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const SingleDetail = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>SingleDetail {id}</Text>
        </View>
    )
}

export default SingleDetail
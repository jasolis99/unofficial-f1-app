import React from 'react'
import F1Logo from './F1Logo'
import { View, Text,StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default function AppBar() {
    return (
        <View style={styles.container}>
            <F1Logo style={styles.logo} width={60} height={40}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e10600',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        marginTop: Constants.statusBarHeight,
    }
})

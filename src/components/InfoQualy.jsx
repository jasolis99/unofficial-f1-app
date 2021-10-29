import React, { useEffect, useState } from 'react'
import {StyleSheet, FlatList, Text, View } from 'react-native'
import {useFonts} from 'expo-font'
import { teamThemes } from '../teamThemes'
import fetchQualifying from '../services/fetchQualifying'

export default function InfoQualy({route}) {
    let [fontsLoaded] = useFonts({
        'F1_Bold': require('../../assets/fonts/Formula1-Bold.otf'),
        'F1_Regular': require('../../assets/fonts/Formula1-Regular.otf'),
        'F1_Wide': require('../../assets/fonts/Formula1-Wide.otf'),
    })
    const [results, setResults] = useState(null)
    const [noQualy, setNoQualy] = useState(false)
    useEffect(() => {
        fetchQualifying(route.params).then((chronos) => {
            if(chronos){
                setResults(chronos)
            }
            else{
                setNoQualy(true)
            }
        })
    }, [])
    if(results && fontsLoaded && !noQualy){
        return(
            <View style={{flex: 1}}>
                <View style={styles.headerTable}>
                    <Text style={[styles.headerPosition,styles.whiteColor]}>POS</Text>
                    <Text style={{width: '10%'}}></Text>
                    <Text style={[styles.headerDriver,styles.whiteColor]}>DRIVER</Text>
                    <Text style={[styles.headerQ,styles.whiteColor]}>Q1</Text>
                    <Text style={[styles.headerQ,styles.whiteColor]}>Q2</Text>
                    <Text style={[styles.headerQ,styles.whiteColor]}>Q3</Text>
                </View>
                <FlatList
                    data={results}
                    renderItem={({ item: driver }) => (
                        <View style={styles.driverCell}>
                            <Text style={[styles.headerPosition,styles.boldFont]}>{driver.position}</Text>
                            <View style={{borderWidth:2,borderColor: teamThemes[driver.Constructor.name],marginRight: '10%'}}></View>
                            <Text style={[styles.headerDriver,styles.boldFont]}>{driver.Driver.code}</Text>
                             <View style={[styles.headerQ]}>
                                <Text style={styles.timeStyle}>{
                                   driver.Q1 ? driver.Q1 : '-'
                                }</Text>
                             </View>
                             <View style={[styles.headerQ]}>
                                <Text style={styles.timeStyle}>{
                                   driver.Q2 ? driver.Q2 : '-'
                                }</Text>
                             </View>
                             <View style={[styles.headerQ]}>
                                <Text style={styles.timeStyle}>{
                                   driver.Q3 ? driver.Q3 : '-'
                                }</Text>
                             </View>
                        </View>
                    )}
                ></FlatList>
            </View>
        )
    }
    else{
        if(noQualy){
            return ( <View><Text>No times</Text></View>)
        }
        return ( <View><Text>Loading...</Text></View>)
    }
}
const styles =  StyleSheet.create({
    headerTable:{
        flexDirection: 'row',
        backgroundColor: '#39383f',
        padding: 18
    },
    headerPosition:{
        width: '10%'
    },
    headerDriver:{
        width: '20%'
    },
    headerQ:{
        width: '20%',
        textAlign: 'center'
    },
    driverCell:{
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 1,
        padding: 18
    },
    timeStyle:{
        textAlign: 'center'
    },
    regularFont:{
        fontFamily: 'F1_Regular'
    },
    boldFont:{
        fontFamily: 'F1_Bold'
    },
    whiteColor:{
        color: 'white',
        fontWeight: '600'
    }
})
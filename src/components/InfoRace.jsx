import React, { useEffect, useState } from 'react'
import {StyleSheet, FlatList, Text, View } from 'react-native'
import {useFonts} from 'expo-font'
import { teamThemes } from '../teamThemes'
import fetchIndividualRaceResult from '../services/fetchIndividualRaceResult'

export default function InfoRace({route}) {
    let [fontsLoaded] = useFonts({
        'F1_Bold': require('../../assets/fonts/Formula1-Bold.otf'),
        'F1_Regular': require('../../assets/fonts/Formula1-Regular.otf'),
        'F1_Wide': require('../../assets/fonts/Formula1-Wide.otf'),
    })
    const [results, setResults] = useState(null)
    useEffect(() => {
        fetchIndividualRaceResult(route.params).then(setResults)
    }, [])
    if(results && fontsLoaded){
        return(
            <View style={{flex: 1}}>
                <View style={styles.headerTable}>
                    <Text style={[styles.headerPosition,styles.whiteColor]}>POS</Text>
                    <Text style={{width: '10%'}}></Text>
                    <Text style={[styles.headerDriver,styles.whiteColor]}>DRIVER</Text>
                    <Text style={[styles.headerTime,styles.whiteColor]}>TIME/RET</Text>
                    <Text style={[styles.headerPoints,styles.whiteColor]}>PTS</Text>
                </View>
                <FlatList
                    data={results}
                    renderItem={({ item: driver }) => (
                        <View style={styles.driverCell}>
                            <Text style={[styles.headerPosition,styles.boldFont]}>{driver.position}</Text>
                            <View style={{borderWidth:2,borderColor: teamThemes[driver.Constructor.name],marginRight: '10%'}}></View>
                            <Text style={[styles.headerDriver,styles.boldFont]}>{ driver.Driver.code ? driver.Driver.code : driver.Driver.familyName }</Text>
                             <View style={[styles.headerTime]}>
                                <Text style={styles.timeStyle}>{
                                    driver.Time ? driver.Time.time : driver.status
                                }</Text>
                             </View>
                            <Text style={[styles.headerPoints,styles.regularFont]}>{driver.points}</Text>
                        </View>
                    )}
                ></FlatList>
            </View>
        )
    }
    else{
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
        width: '30%'
    },
    headerTime:{
        width: '40%'
    },
    driverCell:{
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 1,
        padding: 18
    },
    timeStyle:{},
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
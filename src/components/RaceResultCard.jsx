import React from 'react'
import { StyleSheet,Text, View } from 'react-native'
import {useFonts} from 'expo-font'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { months } from '../months'
export default function RaceResultCard(params) {
    let [fontsLoaded] = useFonts({
        'F1_Bold': require('../../assets/fonts/Formula1-Bold.otf'),
        'F1_Regular': require('../../assets/fonts/Formula1-Regular.otf'),
    })
    const day = new Date(params.date).getDate()
    const month = months[new Date(params.date).getMonth()].substring(0,3).toLocaleUpperCase()
    if(!fontsLoaded){
        return <View>
            <Text>Loading ...</Text>
        </View>
    }
    else{
       return( 
        <View style={ params.index === 0 ? styles.containerLeader : styles.container}>
            <View style={styles.dateView}>
                <Text style={params.index === 0 ? {fontFamily: 'F1_Regular',color:'white'} : {fontFamily: 'F1_Regular'}}>{day}</Text>
                <View style={params.index === 0 ? styles.monthLeader : styles.month}>
                    <Text style={params.index === 0 ? {fontFamily: 'F1_Bold',color:'white'} : {fontFamily: 'F1_Bold',color:'#68676e'}}>{month}</Text>
                </View>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.infoView}>
                <Text style={params.index === 0 ? {fontFamily: 'F1_Bold',color:'white',fontSize: 18} : {fontFamily: 'F1_Bold',fontSize: 18}}>{params.Location.country}</Text>
                <Text style={params.index === 0 ? {marginTop: 8, color:'white'} : {marginTop: 8,color: '#68676e'}}>{params.circuitName}</Text>
                <View style={styles.drivers}>
                    {
                        params.podium.map((driver,index) => <Text key={index} style={params.index === 0 ? {marginTop: 8,color:'white',fontFamily: 'F1_Bold',fontSize:12} : {marginTop: 8,fontFamily: 'F1_Bold',fontSize:12}}>{driver.Driver.code ? driver.Driver.code : driver.Driver.familyName.substring(0,3).toLocaleUpperCase()}</Text>)
                    }
                </View>
            </View>
            <View style={styles.arrow}>
                    {
                        params.index === 0 
                        ? <Ionicons name="chevron-forward-outline" size={20} color="white"/>
                        : <Ionicons name="chevron-forward-outline" size={20} color="red"/>
                    }
                </View>
        </View>
        )
    }
    
};
const styles =  StyleSheet.create({
    containerLeader:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#39383f',
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 4,
        position: 'relative'
    },
    dateView:{
        width: '20%',
        padding: 10,
        alignItems:'center'
    },
    monthLeader:{
        backgroundColor: "#68676e",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        paddingBottom:5,
        alignItems:'center',
        borderRadius: 10,
        marginTop: 5
    },
    month:{
        backgroundColor: "#ededed",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,
        paddingBottom:5,
        alignItems:'center',
        borderRadius: 10,
        marginTop: 5
    },
    separator:{
        borderWidth: 1,
        height: '100%'
    },
    infoView:{
        width: '70%',
        padding: 10,
    },
    drivers:{
        marginTop: 8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 4,
    },
    arrow:{
        marginLeft: 10
    },
})
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useFonts} from 'expo-font'
import { teamThemes, teamCarsPictures } from '../teamThemes'
import fetchDrivers from '../services/fetchDrivers'

export default function TeamCard(params) {
    const [drivers, setDrivers] = useState(null)
    useEffect(() => {
        fetchDrivers().then(setDrivers)
    },[])
    const getTeamDrivers = drivers ? drivers.filter((driver) => driver.Constructors[0].name === params.team) : []
    let [fontsLoaded] = useFonts({
        'F1_Bold': require('../../assets/fonts/Formula1-Bold.otf'),
        'F1_Regular': require('../../assets/fonts/Formula1-Regular.otf'),
    })
    if(!fontsLoaded){
        return <View>
            <Text> Loading ...</Text>
            </View>
    }
    else{
        return (
            <View style={(params.position === '1' ) ? styles.containerLeader : styles.container}>
                <View style={styles.position}>
                    <Text style={ (params.position === '1' ) ? {fontFamily: 'F1_Bold', color: 'white',fontSize:20,alignSelf:'center'} : {fontFamily: 'F1_Bold',fontSize:20,alignSelf:'center'}}>{params.position}</Text>
                </View>
                <View style={{height: '100%',borderWidth:2, borderColor: teamThemes[params.team]}} />
                <View style={styles.nameAndTeam}>
                    <Text style={(params.position === '1' ) ? styles.teamLeader : styles.team}>{params.team}</Text>
                    <View style={params.position !== '1'  && styles.teams }>
                        {
                            getTeamDrivers.map((driver,index) => <Text key={index} style={(params.position === '1' && {color: 'white', fontWeight: '500',marginTop: 10} )}>{driver.Driver.familyName} {index === 0 && params.position !== '1' && '/'} </Text>)
                        }
                    </View>
                </View>
                {
                    params.position === '1' && <View style={styles.image}>
                        <Image style={{width:'60%',height: 100,transform: [{scaleX: -1}],right:-220, resizeMode:'contain'}}   source={{uri: teamCarsPictures[params.team]}} />
                    </View>
                }
                <View style={(params.position === '1') ? styles.pointsLeader : styles.points }>
                    <Text style={{fontFamily: 'F1_Bold',alignSelf:'center'}} >{params.points}</Text>
                </View>
                <View style={(params.position === '1') ? styles.arrowLeader :styles.arrow}>
                    {
                        params.position === '1' 
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
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 4,
    },
    position:{
        flexBasis: '25%'
    },
    nameAndTeam:{
        padding: 5,
        flexBasis: '50%'
    },
    teams:{
        marginTop: 8,
        flexDirection: 'row',
    },  
    points:{
        flexBasis: '15%',
        backgroundColor: "#f0f0f0",
        padding: 5,
        borderRadius: 10 
    },
    pointsLeader:{
        position: 'absolute',
        right: 40,
        bottom: 10,
        backgroundColor: "#f0f0f0",
        padding: 5,
        borderRadius: 10,
        zIndex: 1
    },
    teamLeader:{
        color: 'white',
        fontFamily: 'F1_Bold',
        fontSize: 20
    },
    team:{
        fontFamily: 'F1_Bold'
    },
    arrow:{
        marginLeft: 10
    },
    arrowLeader:{
        position: 'absolute',
        right: 5
    },
    image:{
        width: '100%', 
        height: 100,
        position: 'absolute', 
        bottom: 0, 
        right: 0,
        overflow: 'hidden'
    }
})
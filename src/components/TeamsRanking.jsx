import React, { useState,useEffect } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import TeamCard from './TeamCard'
import fetchConstructors from '../services/fetchConstructors'

export default function TeamsRanking() {
    const [ranking, setRanking] = useState(null)

    useEffect(() => {
        fetchConstructors().then(setRanking)
    }, [])
    
    const mappedTeamRanking = ranking ? ranking.map((team) => {
        return {
          position: team.position,
          points: team.points,
          team: team.Constructor.name
        }
    }) : []

    return (
      <FlatList 
        data={mappedTeamRanking}
        style={{paddingRight: 16,backgroundColor: '#13141d'}} 
        ItemSeparatorComponent={Text}
        renderItem={({ item: team }) => (
            <TeamCard {...team} />
        )}
        >
      </FlatList>
    )
  }
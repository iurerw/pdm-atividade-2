import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

type CardProps = {
    name: string,
    age: number
}

export default function Card ({name, age}:CardProps){
    return (
      <View style={styles.container}>
        <Text style={styles.textLabel}>Vaccine:</Text>
        <Text style={styles.textContent}>{name}</Text>
        <Text style={styles.textLabel}>Age: {age} months</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        backgroundColor: "#C0C0C0",
        borderRadius: 15,
        padding: 10,
        marginTop:10
    },
    textLabel:{
        fontSize: 18,
        fontWeight:"bold"
    },
    textContent:{
        fontSize: 16,
    }
})
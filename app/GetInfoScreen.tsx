import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component, useState } from 'react'
import { router, usePathname } from 'expo-router'

export default function GetInfoScreen (){
    
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    
    return (
        <View>
            <Text 
                testID='input-name'
                style={styles.label}>Baby's Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Baby's name"
            />
            <Text 
                style={styles.label}>How Old?</Text>
            <TextInput
                testID='input-age-months'
                style={styles.input}
                onChangeText={(text) => setAge(Number(text))}
                placeholder="Baby's age"
            />
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button 
                        testID='check'
                        title="check for vaccine" 
                        onPress={() => router.push({
                            pathname:'/ListScreen', 
                            params: {name, age}
                        })} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius:10,
    },
    label: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 20,
        fontWeight:'bold',
    },
    buttonContainer: {
        marginTop: 20,
        width: 200,
    },
})
import { Text, StyleSheet, View, FlatList, ScrollView } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import  DATA  from '../constants/DATA.json'
import { useLocalSearchParams } from 'expo-router';
import Card from '../components/Card';

export default function ListScreen(){

type Vaccine = {
  id: number;
  name: string;
  age: number;
};

  const { name, age } = useLocalSearchParams();

  const [filteredData, setFilteredData] = useState<Vaccine[]>([]);
  useEffect(() => {
    const result = DATA.filter((item) => item.age <= Number(age));
    setFilteredData(result);
  }, [Number(age)]);
  return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Baby {name} should take:
          </Text>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card name={String(item.name)} age={Number(item.age)} />
            )}
          />
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    marginTop:20,
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
  }
})
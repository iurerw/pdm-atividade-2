import { Stack } from 'expo-router/stack';

export default function Layout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: '#191970',
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'heavy',
      color: 'white'
    },
  }}>
  {/* Optionally configure static options outside the route.*/}
  <Stack.Screen name="index" options={{title:'ShotScheduler'}} />
  <Stack.Screen name="ListScreen" options={{title:'List of Vaccines'}} />
  <Stack.Screen name="GetInfoScreen" options={{title:"Baby's Info"}} />

  </Stack>;
}
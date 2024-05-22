import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router/stack';

const RooyLayout = () => {
  return (
        <Stack>
          <Stack.Screen name="index" options={{headerShown:false}}/>   

          <Stack.Screen name="dashboard" options={{headerShown:false}}/>   
            
        </Stack>
  )
}

export default RooyLayout

const styles = StyleSheet.create({})
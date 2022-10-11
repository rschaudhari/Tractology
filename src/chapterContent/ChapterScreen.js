import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ChapterScreen = () => {
  return (
    <View style={styles.containter}>
      <Text>ChapterScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containter:{
        flex:1,
    }
})
export default ChapterScreen;
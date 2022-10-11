import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Global'


const data = [
  { id:'1', chapterName:'Chapter-1'},
  { id:'2', chapterName:'Chapter-2'},
  { id:'3', chapterName:'Chapter-3'},
  { id:'4', chapterName:'Chapter-4'},
  { id:'5', chapterName:'Chapter-5'},
]
const Dashboard = ({navigation}) => {  

  const chaptersContainer = ({item}) => {
    return(
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ChapterScreen')}>
        <Text style={styles.chapterTitle}>{item.chapterName}</Text>
      </TouchableOpacity>
  )}

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={chaptersContainer}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={styles.mainView}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    listContainer:{
      marginVertical:20,
    },
    mainView:{
      paddingHorizontal:10,
      justifyContent:'space-between'
    },
    card:{
      borderWidth:1,
      borderColor:COLORS.gray,
      backgroundColor:COLORS.white,
      padding:20,
      borderRadius:10,
      width:Dimensions.get('window').width/2.2,
      height:100,
      justifyContent:'center',
      margin:2
    },
    chapterTitle:{
      textAlign:'center',
      textTransform:'capitalize',
      fontSize:18,
    },
})

export default Dashboard;
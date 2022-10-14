import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Global'

const data = [
  { id:'1', chapterName:'Chapter-1'},
  { id:'2', chapterName:'Chapter-2'},
  { id:'3', chapterName:'Chapter-3'},
  { id:'4', chapterName:'Chapter-4'},
  { id:'5', chapterName:'Chapter-5'},
]
const cardWidth = Dimensions.get('window').width/2.3;

const Dashboard = ({navigation}) => {  

  const chaptersContainer = ({item}) => {
    return(
      <View style={styles.contentCard}>
      <TouchableOpacity onPress={()=>navigation.navigate('ChapterScreen')}>
        <Image
          style={styles.image}
          source={require('../constants/images/11Tractor.png')}
        />
      </TouchableOpacity>
      <Text style={styles.chapterTitle}>Tractor introduction</Text>
      </View>
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
    image:{
      width: cardWidth,
      height:100,
      justifyContent:'center',
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
    },
    contentCard:{
      width: cardWidth,
      flexDirection:'column',
      marginVertical:10,
      borderWidth:1,
      borderColor:COLORS.gray,
      opacity:6,
      borderRadius:10,
    },
    chapterTitle:{
      textTransform:'capitalize',
      letterSpacing:1,
      fontWeight:'bold',
      padding:5,
    },
})

export default Dashboard;
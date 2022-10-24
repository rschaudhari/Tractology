import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import RenderHTML from 'react-native-render-html';

const CourseContentScreen = ({navigation}) => {
  const {width} = useWindowDimensions();
  const source = {
    html: `<p style='text-align:center;'>Hello World!</p>`
  };

  return (
    <SafeAreaView style={styles.container}>
			<Ionicons size={26} name="chevron-back-outline" onPress={() => navigation.goBack()} />
      <View>
        <Text style={styles.headerText}>Some Random header with large text</Text>
      </View>
      <View style={styles.mainTextContainer}>
        <RenderHTML contentWidth={width} source={source} />
      </View>     
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingHorizontal: 10,
    },
    headerText:{
      fontSize:28,
      fontFamily: 'Bold'
    },
})

export default CourseContentScreen;
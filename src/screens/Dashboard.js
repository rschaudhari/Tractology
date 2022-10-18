import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import courses from '../constants/courses';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {

  const CourseCard = ({ course }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CourseScreen', {data: course})}
      >
        <ImageBackground
          source={course.image}
          style={styles.cardImageBackground}>
          <Text
            style={styles.cardChapterHeading}>
            {course.name}
          </Text>
          <Text style={styles.cardSubChapterHeading}>
            {course.totalCourse + ' Chapter'}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={styles.container}>
      <View style={{marginTop:55}}>
        <TouchableOpacity 
          onPress={()=>navigation.navigate('Profile')}
          style={{alignSelf:'flex-end', marginBottom:10}}>
          <Image
            style={{height: 40, width: 40, marginRight: 20}}
            source={require('../constants/images/person.png')}
          />
        </TouchableOpacity>
        <View
          style={styles.searchContainer}>
          <Ionicons size={20} name="search" />
          <TextInput
            style={{ fontSize: 16, marginLeft: 5 }}
            placeholder="Search for anything"
          />
        </View>
        <Text style={styles.mainChapterText}>Chapters</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: '#F5F5F7',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardImageBackground: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    width: windowWidth / 2 - 30,
    height: windowHeight / 3,
    paddingTop: 25,
    paddingLeft: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  mainChapterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  cardChapterHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  cardSubChapterHeading: {
    color: '#000000',
    fontWeight: '600'
  }
})

export default HomeScreen;

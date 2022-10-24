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
import { COLORS } from '../constants/Global';
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
          style={styles.cardImageBackground}
          blurRadius={3}
          >
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
      <View style={{marginTop:10}}>
        <TouchableOpacity 
          onPress={()=>navigation.navigate('Profile')}
          style={{alignSelf:'flex-end', marginBottom:10}}>
          <Image
            style={styles.profileImage}
            source={require('../constants/images/person.png')}
          />
        </TouchableOpacity>
        <View
          style={styles.searchContainer}>
          <Ionicons size={20} name="search"/>
          <TextInput
            style={styles.searchInput}
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
  profileImage:{
    height: 40, 
    width: 40, 
    marginRight: 20
  },
  searchContainer: {
    paddingVertical:8,
    paddingLeft: 15,
    backgroundColor: '#F5F5F7',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchInput:{
    width: '70%',
    fontSize: 16,
    marginLeft: 5,
    fontFamily:'Regular' 
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
    marginVertical: 10,
    fontFamily:'Bold' 
  },
  cardChapterHeading: {
    fontSize: 20,
    fontFamily: 'Bold',
    paddingBottom: 5,
  },
  cardSubChapterHeading: {
    color: COLORS.black,
    fontFamily: 'SemiBold',
   }
})

export default HomeScreen;

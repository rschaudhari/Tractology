import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

const CourseScreen = ({ route, navigation }) => {
	const { data } = route.params;

	const CourseContentList = ({ content, index }) => {
		return (
			<View style={styles.courseListContainer}>
				<Text style={styles.courseIndex}>
					{'0' + (index + 1)}
				</Text>
				<TouchableOpacity style={styles.courseTitleContainer} onPress={()=>navigation.navigate('CourseContent')}>
					<Text style={styles.courseName}>
						{content.title}
					</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={data.image}
				style={styles.imageContainer}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Ionicons size={26} name="chevron-back-outline" onPress={() => navigation.goBack()} />
					<Text style={styles.chapterName}>
						{data.name}
					</Text>
				</View>
			</ImageBackground>
			<View
				style={styles.courseContentContainer}>
				<Text style={styles.courseContentText}> Course Content </Text>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={data.courseContent}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item, index }) => (
						<CourseContentList index={index} content={item} />
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		height: 400,
		paddingTop: 20,
	},
	chapterName: {
		fontSize: 25,
		fontFamily: 'Bold',
		paddingRight: 20,
		paddingLeft: 20,
	},
	courseContentContainer: {
		flex: 1,
		marginTop: -40,
		backgroundColor: '#fff',
		borderTopRightRadius: 50,
		borderTopLeftRadius: 50,
		height: '100%',
	},
	courseContentText: {
		marginTop: 20,
		marginBottom: 10,
		marginHorizontal: 20,
		fontSize: 21,
		fontFamily: 'Bold',
	},
	courseListContainer: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	courseIndex: {
		fontSize: 40,
		fontFamily: 'Bold',
		color: '#E4E7F4'
	},
	courseName: {
		fontSize: 18,
		fontFamily: 'Bold',
	},
	courseTitleContainer: {
		paddingHorizontal: 20
	}
})

export default CourseScreen;

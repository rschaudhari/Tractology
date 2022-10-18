import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { COLORS } from '../constants/Global'
import { Ionicons } from '@expo/vector-icons'

const ProfileScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft:()=>(
					<Ionicons size={28} name="chevron-back-outline" onPress={() => navigation.goBack()} />
				)
		});
	}, [])
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ marginTop: 55 }}>
				<TouchableOpacity
					onPress={() => navigation.navigate('Profile')}
					style={{ alignSelf: 'center', marginBottom: 10 }}>
					<Image
						style={{ height: 140, width: 140, marginRight: 20 }}
						source={require('../constants/images/person.png')}
					/>
				</TouchableOpacity>
				<KeyboardAvoidingView keyboardVerticalOffset={100}>
					<View style={styles.mainView}>
						<View style={styles.inputContainer}>
							<Text style={styles.label}>Email/Username</Text>
							<TextInput
								style={styles.input}
								placeholder='rsc@gmail.com'
								editable={false}
							/>
						</View>
						<View style={styles.inputContainer}>
							<Text style={styles.label}>Name</Text>
							<TextInput
								style={styles.input}
								placeholder='Rahul Chaudhari'
								editable={false}
							/>
						</View>
						<View style={styles.inputContainer}>
							<Text style={styles.label}>City</Text>
							<TextInput
								style={styles.input}
								placeholder='Pune'
								editable={false}
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
	inputContainer: {
		marginVertical: 6,
	},
	input: {
		height: 45,
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.gray,
		color: COLORS.black,
	},
	label: {
		fontWeight: '700',
		paddingLeft: 8,
		marginBottom: 5,
	},
	btnContainer: {
		marginTop: 20,
		backgroundColor: COLORS.secondary,
		padding: 10,
		borderRadius: 10,
		alignItems: 'center',
	},
	btnText: {
		fontSize: 18,
		letterSpacing: 1.2,
		textTransform: 'uppercase',
		color: COLORS.white
	},
})
export default ProfileScreen;
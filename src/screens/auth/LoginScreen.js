import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Dimensions,
	ScrollView,
	KeyboardAvoidingView,
	Image
} from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Global'

const LoginScreen = ({ navigation }) => {
	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<View style={{ marginTop: 55 }}>
				<Image
					source={require('../../constants/images/tract_trans.png')}
					style={{ height: 200, width: '100%' }}
				/>
			</View>
			<KeyboardAvoidingView keyboardVerticalOffset={100}>
				<View style={styles.mainView}>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Email/Username</Text>
						<TextInput
							style={styles.input}
							placeholder='Email'
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Password</Text>
						<TextInput
							style={styles.input}
							placeholder='Password'
						/>
					</View>
					<Text style={styles.passwordLink}>Forgot Password</Text>
					<TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('Dashboard')}>
						<Text style={styles.btnText}>Sign in</Text>
					</TouchableOpacity>
					<View style={styles.dividerContainer}>
						<View style={styles.divider} />
						<Text style={styles.dividerTxt}>OR</Text>
						<View style={styles.divider} />
					</View>
					<TouchableOpacity style={styles.registerContainer} onPress={() => navigation.navigate('Register')}>
						<Text style={styles.registerText}>Register to Tractology</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	mainView: {
		marginTop: 55,
		marginHorizontal: 10
	},
	inputContainer: {
		marginVertical: 10,
	},
	input: {
		height: 45,
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.gray,
		color: COLORS.black,
		fontFamily:'Regular'
	},
	label: {
		paddingLeft: 8,
		marginBottom: 5,
		fontFamily: 'Bold'
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
		color: COLORS.white,
		fontFamily:'Regular'
	},
	passwordLink: {
		fontSize: 14,
		color: COLORS.primary,
		textAlign: 'right',
		fontFamily:'Regular'
	},
	divider: {
		backgroundColor: COLORS.darkGray,
		height: 0.7,
		width: Dimensions.get('window').width / 2.7
	},
	dividerTxt: {
		fontSize: 14,
		paddingHorizontal: 5,
		alignSelf: 'center',
		color: COLORS.darkGray,
		fontFamily:'Bold'
	},
	dividerContainer: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	registerContainer: {
		marginTop: 20,
	},
	registerText: {
		fontSize: 12,
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: COLORS.primary,
		fontFamily:'Bold'
	},
})
export default LoginScreen;
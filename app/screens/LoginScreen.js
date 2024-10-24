import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

    const LoginScreen =  () => {
        const navigation = useNavigation();
        const handleLessons = () => {
            navigation.navigate("LESSONS");
        };
        const handleSignUp = () => {
            navigation.navigate("SIGNUP"); // Navigate to Sign Up screen
        };

    return (
        <LinearGradient colors={['#8BD68E', '#28D039']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>KUMON nahLEDGE</Text>
                <Image
                    source={require('../assets/favicon.png')} // Ensure the path to your logo is correct
                    style={styles.logo}
                />
                <Text style={styles.subtitle}>Learn Math Today</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.signInText}>Sign In To Your Account</Text>
                <View style={styles.inputGroup}>
                    <InputField label="Email Address" placeholder="learnmath221@gmail.com" />
                    <InputField label="Password" placeholder="***************" secureTextEntry={true} />
                </View>
                
                <TouchableOpacity style={styles.Loginbutton}
                onPress={handleLessons}>
                    <Text style={styles.LoginbuttonText}>Log In</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>Or</Text>
                
                <TouchableOpacity style={styles.Signupbutton} onPress={handleSignUp}>
                    <Text style={styles.SignupbuttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const InputField = ({ label, placeholder, secureTextEntry }) => (
    <View style={styles.inputWrapper}>
        <Text>{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
      
    },
    headerContainer: {
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 20,
    },
    title: {
        fontSize: 20,
        color: '#000',
        marginTop: 30,
        fontFamily:'Jura-Bold',
    },
    logo: {
        height: 70,
        width: 70,
    },
    subtitle: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 15,
        gap: 1,
        
    },
    formContainer: {
        marginTop: 20,
    },
    signInText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'flex-start',
       paddingRight:80,
    },
    inputGroup: {
        gap: 12,
        marginTop: 12,
        fontSize: 12,
    },
    inputWrapper: {
        gap: 6,
    },
    input: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
    Loginbutton: {
        backgroundColor: '#000000',
        borderRadius: 50,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    LoginbuttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Signupbutton: {
        backgroundColor: '#000000',
        borderRadius: 50,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    SignupbuttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        color: '#fff', // Set the color of "Or" to white
        textAlign: 'center',
        marginTop:  12,
        fontSize: 12,
        fontWeight: 'bold', // Adjust the font size as needed
    },
});
export default LoginScreen;
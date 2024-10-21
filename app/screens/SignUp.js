import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function SignupScree() {
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate("LOGIN"); // Navigate to login screen
    };

    const handleSignUp = () => {
        navigation.navigate("LESSONS"); // Navigate to lessons screen after creating account
    };

    return (
        <LinearGradient colors={['#8BD68E', '#28D039']} style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Text style={styles.title}>KUMON nahLEDGE</Text>
                <Image
                    source={require('../assets/favicon.png')} // Ensure the path to your logo is correct
                    style={styles.logo}
                />
                <Text style={styles.subtitle}>Learn Math Today</Text>
            </SafeAreaView>
            <View style={styles.formContainer}>
                <Text style={styles.signInText}>Create New Account</Text>
                <View style={styles.inputGroup}>
                    <InputField label="Full Name" placeholder="John Doe" />
                    <InputField label="Email Address" placeholder="learnmath221@gmail.com" />
                    <InputField label="Password" placeholder="***************" secureTextEntry={true} />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Already have an account? Sign In</Text>
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
        gap: 50,
    },
    headerContainer: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 30,
    },
    logo: {
        height: 100,
        width: 100,
    },
    subtitle: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 40,
        gap: 1,
        fontStyle: 'italic',
    },
    formContainer: {
        marginTop: 20,
    },
    signInText: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        fontStyle: 'italic',
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
    button: {
        backgroundColor: '#0021F8',
        borderRadius: 50,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Play = () => {
  const navigation = useNavigation();

  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <LinearGradient colors={['#a8e063', '#56ab2f']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose a Lesson</Text>
      </View>
      {['COUNTING_NUMBERS', 'SHAPES', 'ADDI', 'SUB', 'MULTI', 'DIVI'].map((lesson, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.button} 
          onPress={() => handleNavigation(lesson)}>
          <Text style={styles.buttonText}>{lesson.replace('_', ' ')}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: 200,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Play;

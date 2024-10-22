import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Play from './Play'; // Import the Play component
import AboutUs from './AboutUS'; // Import the About Us component


// About Screen with additional buttons for Multiplication, Division, etc.
const AboutScreen = () => {
  const navigation = useNavigation();


  const handleMulti = () => {
    navigation.navigate("MULTI");
  };
  const handleDivi = () => {
    navigation.navigate("DIVI");
  };
  const handleAddi = () => {
    navigation.navigate("ADDI");
  };
  const handleSub = () => {
    navigation.navigate("SUB");
  };


  return (
    <LinearGradient colors={['#a8e063', '#56ab2f']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Learn Math Today</Text>
      </View>


      {/* Navigation to Play Screen */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Play")}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>


      {/* Navigation to About Us Screen */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AboutUs")}>
        <Text style={styles.buttonText}>ABOUT US</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.button, styles.multiplication]} onPress={handleMulti}>
        <Text style={styles.buttonText}>MULTIPLICATION</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.button, styles.division]} onPress={handleDivi}>
        <Text style={styles.buttonText}>DIVISION</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.button, styles.addition]} onPress={handleAddi}>
        <Text style={styles.buttonText}>ADDITION</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.button, styles.subtraction]} onPress={handleSub}>
        <Text style={styles.buttonText}>SUBTRACTION</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.button, styles.countingNumbers]} onPress={() => navigation.navigate("COUNTING_NUMBERS")}>
        <Text style={styles.buttonText}>COUNTING NUMBERS</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.button, styles.guessShape]} onPress={() => navigation.navigate("SHAPE")}>
        <Text style={styles.buttonText}>GUESS THE SHAPE</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};


// Lesson Screen with navigation to individual lessons
const LessonScreen = () => {
  const navigation = useNavigation();


  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };


  return (
    <LinearGradient colors={['#a8e063', '#56ab2f']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Learn Math Today</Text>
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


// Bottom Tab Navigator
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Lesson') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Play') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
          } else if (route.name === 'About Us') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
       
      })}
    >
      <Tab.Screen name="Lesson" component={LessonScreen}
      options={{ headerShown: false }} />
      <Tab.Screen name="Play" component={Play}
      options={{ headerShown: false }}
      />
      <Tab.Screen name="About Us" component={AboutUs}
      options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};


// Styles
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
  multiplication: {
    backgroundColor: '#ff6347',
  },
  division: {
    backgroundColor: '#fafad2',
  },
  addition: {
    backgroundColor: '#ffb6c1',
  },
  subtraction: {
    backgroundColor: '#f0e68c',
  },
  countingNumbers: {
    backgroundColor: '#b19cd9',
  },
  guessShape: {
    backgroundColor: '#f4a460',
  },
});


export default App;






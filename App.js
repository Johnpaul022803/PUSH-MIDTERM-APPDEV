import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import Lessons from './app/screens/Lesson';
import SignUp from './app/screens/SignUp';
import MultiScreen from './app/screens/MultiScreen';
import DiviScreen from './app/screens/DiviScreen';
import AddiScreen from './app/screens/AddiScreen';
import SubScreen from './app/screens/SubScreen';
import GuessShape from './app/screens/Lessons/SHAPE';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="LESSONS" component={Lessons} />
        <Stack.Screen name="SIGNUP" component={SignUp} />
        <Stack.Screen name ="MULTI" component={MultiScreen} />
        <Stack.Screen name ="DIVI" component={DiviScreen} />
        <Stack.Screen name="ADDI" component={AddiScreen} />
        <Stack.Screen name ="SUB" component={SubScreen} />
        <Stack.Screen name ="SHAPE" component={GuessShape} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
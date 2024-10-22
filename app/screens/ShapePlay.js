import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const shapes = [
  { name: 'circle', image: require('../assets/shapes/circle.png') },
  { name: 'diamond', image: require('../assets/shapes/diamond.png') },
  { name: 'heptagon', image: require('../assets/shapes/heptagon.png') },
  { name: 'octagon', image: require('../assets/shapes/octagon.png') },
  { name: 'pentagon', image: require('../assets/shapes/pentagon.png') },
  { name: 'rectangle', image: require('../assets/shapes/rectangle.png') },
  { name: 'square', image: require('../assets/shapes/square.png') },
  { name: 'star', image: require('../assets/shapes/star.png') },
  { name: 'triangle', image: require('../assets/shapes/triangle.png') },
];

const ShapePlay = () => {
  const navigation = useNavigation();
  const [currentShape, setCurrentShape] = useState(null);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    generateQuestion();
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          showScoreAlert();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const generateQuestion = () => {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    setCurrentShape(randomShape);

    let allChoices = shapes.map(shape => shape.name).filter(name => name !== randomShape.name);
    allChoices = [randomShape.name, allChoices[Math.floor(Math.random() * allChoices.length)]];
    const shuffledChoices = allChoices.sort(() => Math.random() - 0.5);

    setChoices(shuffledChoices);
    setSelectedChoice(null);
  };

  const handleAnswer = (choice) => {
    if (!isGameOver) {
      setSelectedChoice(choice);
      if (choice === currentShape.name) {
        setScore(score + 1);
      }
      setTimeout(() => {
        generateQuestion();
      }, 1000);
    }
  };

  const showScoreAlert = () => {
    Alert.alert("Time's up!", `Your final score is: ${score}`, [{ text: "OK" }]);
  };

  return (
    <LinearGradient colors={['#ffcc00', '#ff6699']} style={styles.container}>
      <Text style={styles.score}>{isGameOver ? `Final Score: ${score}` : `Score: ${score}`}</Text>
      <Text style={styles.timer}>Time Remaining: {timeRemaining}s</Text>
      {currentShape && <Image source={currentShape.image} style={styles.shapeImage} />}
      <View style={styles.buttonContainer}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selectedChoice === choice && (choice === currentShape.name ? styles.correctButton : styles.incorrectButton)
            ]}
            onPress={() => handleAnswer(choice)}
            disabled={isGameOver}
          >
            <Text style={styles.buttonText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 40,
    marginBottom: 20,
    marginTop: 20,
  },
  score: {
    fontSize: 50,
    marginBottom: 10,
    marginTop: 20,
  },
  shapeImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
  correctButton: {
    backgroundColor: 'green',
  },
  incorrectButton: {
    backgroundColor: 'red',
  },
});

export default ShapePlay;

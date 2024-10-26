import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const MultiScreen = () => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null); 
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    generateQuestion();
    startTimer();
    return () => clearInterval(timer); // Clear timer on unmount
  }, []);

  let timer; // Declare timer variable here

  const startTimer = () => {
    timer = setInterval(() => {
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
  };

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswerValue = num1 * num2;
    setCorrectAnswer(correctAnswerValue);
    setQuestion(`${num1} * ${num2} = ?`);
    
    let incorrectAnswer;
    do {
      incorrectAnswer = correctAnswerValue + Math.floor(Math.random() * 10) + 1;
    } while (incorrectAnswer === correctAnswerValue);

    const allChoices = [correctAnswerValue, incorrectAnswer];
    const shuffledChoices = allChoices.sort(() => Math.random() - 0.5);
    setChoices(shuffledChoices);
    setSelectedChoice(null);
  };

  const handleAnswer = (choice) => {
    if (!isGameOver) {
      setSelectedChoice(choice);
      if (choice === correctAnswer) {
        setScore(score + 1);
      }
      setTimeout(() => {
        generateQuestion();
      }, 1000);
    }
  };

  const showScoreAlert = () => {
    Alert.alert(
      "Time's up!",
      `Your final score is: ${score}`,
      [
        { text: "Try Again", onPress: restartGame },
        { text: "Exit", onPress: () => navigation.goBack() }
      ]
    );
  };

  const restartGame = () => {
    setScore(0);
    setTimeRemaining(30);
    setIsGameOver(false);
    generateQuestion();
    startTimer(); // Start the timer again
  };

  return (
    <LinearGradient colors={['#ffcc00', '#ff6699']} style={styles.container}>
      <Text style={styles.timer}>Time Remaining: {timeRemaining}s</Text>
      {isGameOver ? (
        <Text style={styles.score}>Final Score: {score}</Text>
      ) : (
        <Text style={styles.score}>Score: {score}</Text>
      )}
      <Text style={styles.question}>{question}</Text>
      <View style={styles.buttonContainer}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selectedChoice === choice && (choice === correctAnswer ? styles.correctButton : styles.incorrectButton)
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
  },
  question: {
    fontSize: 60,
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
    fontSize: 18,
    textAlign: 'center',
  },
  correctButton: {
    backgroundColor: 'green',
  },
  incorrectButton: {
    backgroundColor: 'red',
  },
});

export default MultiScreen;

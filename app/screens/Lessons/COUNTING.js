import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColors } from '../COLOR/color'; // Import gradient colors for consistency


const fruits = [
  { id: '1',number: '1', name: 'One', image: require('../../assets/fruits/cherries.png')},
  { id: '2',number: '2', name: 'Two', image: require('../../assets/fruits/orange.png') },
  { id: '3',number: '3', name: 'Three', image: require('../../assets/fruits/apple.png') },
  { id: '4',number: '4', name: 'Four', image: require('../../assets/fruits/strawberry.png') },
  { id: '5',number: '5', name: 'Five', image: require('../../assets/fruits/banana.png') },
  { id: '6',number: '6', name: 'Six', image: require('../../assets/fruits/pineapple.png') },
  { id: '7',number: '7', name: 'Seven', image: require('../../assets/fruits/grapes.png') },
  { id: '8',number: '8', name: 'Eight', image: require('../../assets/fruits/peach.png') },
  { id: '9',number: '9', name: 'Nine', image: require('../../assets/fruits/mango.png') },
  { id: '10',number: '10', name: 'Ten', image: require('../../assets/fruits/watermelon.png') },
];

const LESSONCOUNTINGNUMBERS = () => {
  const renderItem = ({ item }) => (
    <View style={styles.ItemContainer}>
    <View style={styles.item}>
    {item.id === '2' ? ( // Check if the item is cherries
          <View style={styles.cherriesContainer}>
            <Image source={item.image} style={styles.image} />
            <Image source={item.image} style={styles.image} />
          </View>
        ) : 
        item.id === '3' ? ( // Check if the item is cherries
          <View style={styles.cherriesContainer}>
            <Image source={item.image} style={styles.image} />
            <Image source={item.image} style={styles.image} />
            <Image source={item.image} style={styles.image} />
          </View>
        ) : 
        
        
        ( // Check if the item is right
      <Image source={item.image} style={styles.image} />)
    }
      <Text style={styles.number}>{item.number}</Text>
      <Text style={styles.text}>{item.name}</Text>
    </View>
    </View>
  );

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
      <View style ={styles.header}>
        <Image
          source={require('../../assets/favicon.png')}/>
          <Text>Learn Math Today</Text>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}>LET'S LEARN OUR SHAPES!</Text>
      </View>
        <FlatList
          data={fruits}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Keeps two items in a row
        />
       
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 15, // Adds spacing between items for a better layout
    
  },
  image: {
    width: 50, // Slightly increased the size for better visibility
    height: 50,
   
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  ItemContainer: {
    flex: 1,
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    elevation: 5, 
    margin: 20,
  },
});

export default LESSONCOUNTINGNUMBERS;

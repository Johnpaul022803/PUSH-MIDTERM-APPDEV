import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';

const shapes = [
  { id: '1', name: 'Circle', image: require('../') },
  { id: '2', name: 'Square', image: require('../assets/shapes/square.png') },
  { id: '3', name: 'Rectangle', image: require('../assets/shapes/rectangle.png') },
  { id: '4', name: 'Triangle', image: require('../assets/shapes/triangle.png') },
  { id: '5', name: 'Diamond', image: require('../assets/shapes/diamond.png') },
  { id: '6', name: 'Star', image: require('../assets/shapes/star.png') },
  { id: '7', name: 'Pentagon', image: require('../assets/shapes/pentagon.png') },
  { id: '8', name: 'Hexagon', image: require('../assets/shapes/hexagon.png') },
  { id: '9', name: 'Heptagon', image: require('../assets/shapes/heptagon.png') },
  { id: '10', name: 'Octagon', image: require('../assets/shapes/octagon.png') },
];

const SHAPE = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shapes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Adjust the number of columns to suit your design
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default SHAPE;

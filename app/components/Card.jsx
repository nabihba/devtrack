import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, description, temperature, humidity, windSpeed, rain }) => {
  return (
    <View style={styles.card}>
      {/* Weather title (city name) */}
      <Text style={styles.title}>{title}</Text>

      {/* Weather description for example clear sky */}
      <Text style={styles.description}>{description}</Text>

      {/* Temperature */}
      <Text style={styles.detail}>Temperature: {temperature}</Text>

      {/* Humidity */}
      <Text style={styles.detail}>{humidity}</Text>

      {/* Wind speed */}
      <Text style={styles.detail}>{windSpeed}</Text>

      {/* Rain probability */}
      <Text style={styles.detail}>{rain}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default Card;
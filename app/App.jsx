import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from './components/Button';
import Card from './components/Card';
import useWeather from './hooks/Weather';

export default function App() {
  const [city, setCity] = useState('Jerusalem'); // State for the city input
  const [count, setCount] = useState(0); // State for the button press counter
  const { weather, loading, refreshWeather } = useWeather(city); // Fetch weather data using the custom hook

  // Function to handle increment counter button press
  const handleIncrement = () => {
    setCount(count + 1); // Increment the counter
  };

  // Function to handle refresh weather button press
  const handleRefresh = () => {
    refreshWeather(); // Refresh the weather data
  };

  return (
    <View style={styles.container}>
      {/* Title of the app */}
      <Text style={styles.title}>Welcome to My App!</Text>

      {/* Input for city name */}
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />

      {/* Display weather data */}
      {loading ? (
        <Text>Loading weather data...</Text>
      ) : (
        <Card
          title={`Weather in ${weather?.name}`}
          description={`${weather?.weather[0]?.description}`}
          temperature={`${weather?.main?.temp}°C`}
          humidity={`Humidity: ${weather?.main?.humidity}%`}
          windSpeed={`Wind: ${weather?.wind?.speed} m/s`}
          rain={weather?.rain ? `Rain: ${weather.rain['1h']} mm` : 'Rain: 0 mm'}
        />
      )}

      {/* Display the button press counter */}
      <Text>Button Pressed: {count} times</Text>

      {/* Increment Counter Button */}
      <Button title="Increment Counter" onPress={handleIncrement} />

      {/* Refresh Weather Button */}
      <Button title="Refresh Weather" onPress={handleRefresh} />
    </View>
  );
}

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
  },
});
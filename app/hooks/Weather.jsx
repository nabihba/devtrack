import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3ba0806e4eda9c7341724473a30dedf&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather data on initial load
  useEffect(() => {
    fetchWeather();
  }, [city]);

  // Function to manually refresh weather data
  const refreshWeather = () => {
    setLoading(true);
    fetchWeather();
  };

  return { weather, loading, refreshWeather };
};

export default useWeather;
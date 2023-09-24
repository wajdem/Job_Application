import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const cardJop = () => {
  const [jobListings, setJobListings] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://a9a6-94-249-0-60.ngrok.io/api/jop/all-job-listings')
      .then(response => {
        setJobListings(response.data);
      })
      .catch(error => {
        console.error('Error fetching job listings:', error);
      });
  }, []);
  
  const handleCardPress = (jobTitle) => {
    navigation.navigate('JopForm', {jobTitle});
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {jobListings.map((job, index) => (
        <TouchableOpacity
          style={styles.card}
          key={index}
          onPress={() => handleCardPress(job.jobTitle)}
        >
          <View style={styles.cardContent}>
            <Text style={styles.jobTitle}>{job.jobTitle}</Text>
            <Text style={styles.description}>{job.description}</Text>
            <Text style={styles.description}>{job.applicationDeadline}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 342,
    height: 138,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#2c2b34",
    flexDirection: "row",
    marginVertical: 10,
    alignSelf: "center",
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#ffffff",
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    color: "#ffffff",
    // fontWeight: "bold",
  },
});

export default cardJop;

// index.js or App.js

// App.js

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import JobCard from './cardJob'; // Import JobCard instead of App
import JopForm from './JobForm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={JobCard} />
        <Stack.Screen name="JopForm" component={JopForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const App = () => {
//   const [jobListings, setJobListings] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     axios.get('https://d6c3-94-249-0-61.ngrok.io/api/jop/all-job-listings')
//       .then(response => {
//         setJobListings(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching job listings:', error);
//       });
//   }, []);
  
//   const handleCardPress = () => {
//     navigation.navigate('JopForm');
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
//       {jobListings.map((job, index) => (
//         <TouchableOpacity
//           style={styles.card}
//           key={index}
//           onPress={handleCardPress}
//         >
//           <View style={styles.cardContent}>
//             <Text style={styles.jobTitle}>{job.jobTitle}</Text>
//             <Text style={styles.description}>{job.description}</Text>
//             <Text style={styles.description}>{job.applicationDeadline}</Text>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#ffffff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   card: {
//     width: 342,
//     height: 138,
//     borderRadius: 20,
//     overflow: "hidden",
//     backgroundColor: "#2c2b34",
//     flexDirection: "row",
//     marginVertical: 10,
//     alignSelf: "center",
//   },
//   cardContent: {
//     flex: 1,
//     padding: 10,
//     justifyContent: "space-between",
//   },
//   jobTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 10,
//     color: "#ffffff",
//     alignItems: "center",
//   },
//   description: {
//     fontSize: 16,
//     color: "#ffffff",
//     // fontWeight: "bold",
//   },
// });

// export default App;

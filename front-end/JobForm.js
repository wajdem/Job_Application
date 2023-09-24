import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';


const JopForm = ({ route }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    gender: "",
    contactInformation: "",
    yearsOfExperience: "",
    educationInformation: "",
    additionalInformation: "",
  });
  const { jobTitle } = route.params;
  const navigation = useNavigation();


  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    // Validation check
    for (const key in formData) {
      if (formData[key] === "") {
        Alert.alert("Form Incomplete", `Please fill out all fields.`, [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        return; // Stop the function if any field is empty
      }
      navigation.navigate('JobCard'); // Make sure 'JobCard' is the correct name of your screen
    }

    try {
      const response = await fetch(
        "https://a9a6-94-249-0-60.ngrok.io/api/jop/newjop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      Alert.alert(
        "Submission Successful",
        "You have successfully applied for the job!!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    } catch (error) {
      console.error("Error:", error);

      Alert.alert(
        "Submission Failed",
        "There was an error while submitting your job. Please try again later.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => handleInputChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) => handleInputChange("address", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={(text) => handleInputChange("gender", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={(text) => handleInputChange("age", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Information"
        onChangeText={(text) => handleInputChange("contactInformation", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Years of Experience"
        onChangeText={(text) => handleInputChange("yearsOfExperience", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Education Information"
        onChangeText={(text) => handleInputChange("educationInformation", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Additional Information"
        onChangeText={(text) =>
          handleInputChange("additionalInformation", text)
        }
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#2c2b34",
    padding: 10,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
    borderRadius: 8,
    fontSize: 16,
    color: "black",
    backgroundColor: "#f4f4f4",
  },
  button: {
    borderRadius: 8,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: '#f4f4f4',
    marginLeft:80,
  },
});

export default JopForm;

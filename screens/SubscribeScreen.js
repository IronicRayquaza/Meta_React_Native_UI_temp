
// import {Alert} from "react-native";
// import React, { useState } from 'react';
// import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';

// const SubscribeScreen = () => {
//   const [email, setEmail] = useState('');
//   const [isButtonEnabled, setIsButtonEnabled] = useState(false);

//   // Handle Email Input
//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setIsButtonEnabled(text.trim().length > 0); // Enable button if input is not empty
//   };

//   // Handle Subscribe Button Click
//   const handleSubscribe = () => {
//     Alert.alert('Subscribed Successfully', `Thank you for subscribing with ${email}!`);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Little Lemon Logo */}
//       <Image
//         source={require('../assets/logo.jpg')} // Adjust path to match your project structure
//         style={styles.logo}
//       />

//       {/* Title */}
//       <Text style={styles.title}>Subscribe to our Newsletter</Text>

//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={handleEmailChange}
//         keyboardType="email-address"
//       />

//       {/* Subscribe Button */}
//       <Pressable
//         style={[styles.button, isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
//         onPress={handleSubscribe}
//         disabled={!isButtonEnabled}
//       >
//         <Text style={styles.buttonText}>Subscribe</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonEnabled: {
//     backgroundColor: '#28a745',
//   },
//   buttonDisabled: {
//     backgroundColor: '#ccc',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SubscribeScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, Image } from 'react-native';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Handle Email Input
  const handleEmailChange = (text) => {
    setEmail(text);
    setIsButtonEnabled(text.trim().length > 0); // Enable button if input is not empty
  };

  // Handle Subscribe Button Click
  const handleSubscribe = () => {
    console.log('Subscribe button clicked'); // Debug log
    Alert.alert('Subscribed Successfully', `Thank you for subscribing with ${email}!`);
  };

  return (
    <View style={styles.container}>
      {/* Little Lemon Logo */}
      <Image
        source={require('../assets/logo.jpg')} // Adjust path
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Subscribe to our Newsletter</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      {/* Subscribe Button */}
      <Pressable
        style={[styles.button, isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
        onPress={handleSubscribe}
        disabled={!isButtonEnabled}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonEnabled: {
    backgroundColor: '#28a745',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubscribeScreen;


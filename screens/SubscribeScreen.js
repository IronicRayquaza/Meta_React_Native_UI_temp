import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, Alert, StyleSheet } from 'react-native';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('');
  const isButtonEnabled = email.trim().length > 0;

  const handleSubscribe = () => {
    Alert.alert('Subscribed', `Thank you for subscribing with ${email}!`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Subscribe to our Newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Pressable
        style={[styles.button, { backgroundColor: isButtonEnabled ? '#4CAF50' : '#d3d3d3' }]}
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
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SubscribeScreen;

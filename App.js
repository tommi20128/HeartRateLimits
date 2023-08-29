import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [hrLimits, setHrLimits] = useState('')

  const calculateHrRate = (value) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const lowerLimit = (220 - numericValue) * 0.65;
      const upperLimit = (220 - numericValue) * 0.85;
      setHrLimits(`${lowerLimit.toFixed(0)} - ${upperLimit.toFixed(0)}`);
    } else {
      setHrLimits('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        placeholder='Put your age here'
        value={age}
        keyboardType='decimal-pad'
        style={styles.field}
        onChangeText= {text => {
          setAge(text)
          calculateHrRate(text)
        }
        }
      />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{hrLimits}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  field: {
    marginBottom: 10,
  }
});

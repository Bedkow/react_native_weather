import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';


export default Places = ({navigation}) => {
const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
return (
<View>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Alert.alert("pressed")
        }}>
        <Text style={styles.btnText}>
           Add Item
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Home")
              }}>
              <Text style={styles.btnText}>
                 GO BACK
              </Text>
            </TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b131e',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: { fontWeight: 'bold' },
  mainTextContainer: { textAlign: 'center', margin: 10, color: 'white', fontSize: 50},
  secondaryTextContainer: {color: '#68717a', fontSize: 30},
  titleButton: {width: 50, height: 50, borderRadius: 25, marginTop: 100}
})
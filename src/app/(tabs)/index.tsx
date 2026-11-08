import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to The Golden Hour!</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //App Background Color
    flex: 1,
    backgroundColor: '#d2d7c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //App Text Color
  text: {
    color: '#a17826',
    fontSize: 27,
    fontWeight: 'bold',
  },
  //"Go To About Screen" Button Styling on Home Page
button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#6c685a',
  },
});

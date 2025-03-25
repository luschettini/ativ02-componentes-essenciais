import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lindas Tulipas do meu Jardim! 🌷</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/image.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
  }
});

import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style.js';

class App extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../img/game-screen-top.png')} />
        <Image styles = {styles.count} source={require('../img/gameBtn.png')} />
        <Image styles = {styles.time} source={require('../img/gameBtn.png')} />
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    );
  }
}

export default App

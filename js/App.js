import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style.js';

class App extends React.Component {
  render() {
    return (
      <View>
        <Image style = {styles.container} source={require('../img/game-screen-top.png')} />
        <Image style = {styles.count} source={require('../img/gameBtn.png')} />
        <Image style = {styles.time} source={require('../img/gameBtn.png')} />
        <View style = {styles.ground}>
          <Image style = {styles.holes} source={require('../img/hole.png')} />
        </View>
      </View>
    );
  }
}

export default App

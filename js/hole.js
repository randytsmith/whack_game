import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style.js';

class Hole extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style = {styles.holes}>
        <Image style = {styles.hole} source={require('../img/hole.png')} resizeMode = 'contain'/>
        <Image style = {styles.mole} source = {require('../img/mole.png')} resizeMode = 'contain'/>
        <Image style = {styles.holemask} source={require('../img/holeMask.png')} resizeMode = 'contain'/>
      </View>
    );
  }
}

export default Hole

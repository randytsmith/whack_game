import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style.js';
import Hole from './hole.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hitCount: 0,
      time: 6,
    }
  }

  renderCountButton() {
    return (
      <View  style = {styles.count} >
        <Image source={require('../img/gameBtn.png')} />
        <Text> {this.state.hitCount}</Text>
      </View>
    )
  }
  render() {
    return (
      <View>
        <Image style = {styles.container} source={require('../img/game-screen-top.png')} />
        {this.renderCountButton()}
        <TimeButton elapseTime = {this.state.time}/>
        <Image style = {styles.hole} source={require('../img/hole.png')} resizeMode = 'contain'/>
        <Image style = {styles.mole} source = {require('../img/mole.png')} resizeMode = 'contain'/>
        <Image style = {styles.holemask} source={require('../img/holeMask.png')} resizeMode = 'contain'/>
      </View>
    );
  }
}

class TimeButton extends React.Component {
  render() {
    return (
      <View style = {styles.time}>
        <Image source={require('../img/gameBtn.png')} />
        <Text> {this.props.elapseTime}</Text>
      </View>
    )
  }
}

export default App

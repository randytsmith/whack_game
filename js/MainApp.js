import React from 'react';
import { Animated, Text, View, Image, StyleSheet } from 'react-native';
import styles from './style.js';
import Hole from './hole.js';

class App extends React.Component {
  state = {
    hitCount: 0,
    time: 6,
    goUpHeight: 3
  }

  renderCountButton() {
    return (
      <View style = {styles.count} >
        <Image style = {styles.button} source={require('../img/gameBtn.png')} resizeMode = 'contain'/>
        <Text> {this.state.hitCount}</Text>
      </View>
    )
  }

  renderTimerButton() {
    return (
      <View style = {styles.time}>
        <Image style = {styles.button} source={require('../img/gameBtn.png')} resizeMode = 'contain'/>
        <Text> {this.props.elapseTime}</Text>
      </View>
    )
  }

  // componentDidMount() {
  //   Animated.timing(                  // Animate over time
  //     this.state.goUpHeight,            // The animated value to drive
  //     {
  //       toValue: 10,                   // Animate to opacity: 1 (opaque)
  //       duration: 10000,              // Make it take a while
  //     }
  //   ).start();                        // Starts the animation
  // }

  render() {
    let { goUpHeight } = this.state;

    return (
      <View style = {styles.container}>
        <Image style = {styles.header} source={require('../img/game-screen-top.png')} />
        {this.renderCountButton()}
        {this.renderTimerButton()}
        <Image style = {styles.hole} source = {require('../img/hole.png')} resizeMode = 'contain'/>
        {/* <Animated.Image style = {{...styles.hole, top: `${35 + goUpHeight }%`}} source={require('../img/hole.png')} resizeMode = 'contain'/> */}
        <Image style = { StyleSheet.flatten([styles.mole, { top: `${35 + goUpHeight }%`}])} source={require('../img/mole.png')} resizeMode = 'contain'/>
        <Image style = {styles.holemask} source={require('../img/holeMask.png')} resizeMode = 'contain'/>
      </View>
    );
  }
}

class TimeButton extends React.Component {
}

export default App

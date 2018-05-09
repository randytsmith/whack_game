import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9BF9C',
    height: '100%'
  },
  header: {
    height: '30%',
  },
  count: {
    position: 'absolute',
    left: '5%',
    width: '100%',
    height: '100%'
  },
  time: {
    position: 'absolute',
    left:'70%',
    width: '100%',
    height: '100%'
  },
  button: {
    top: '3%',
    width: '25%',
  },
  hole: {
    position: 'absolute',
    width: '34%',
    height: '10%',
    top: `35%`,
    left: '5%'
  },
  mole: {
    position: 'absolute',
    height: '30%',
    width:'24%',
    // top: '25%',
    left: '10%',
  },
  holemask:{
    // backgroundColor: '#C00F9C',
    position: 'absolute',
    height: '9%',
    width: '37%',
    top: '39%',
    left: '3.7%'
  }
});

export default styles

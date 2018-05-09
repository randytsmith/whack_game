import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '50%',
  },
  count: {
    position: 'absolute',
    top: 20,
    left:40,
    width: 120,
    height: 40,
  },
  time: {
    position: 'absolute',
    top: 20,
    left:270,
    width: 120,
    height: 40,
  },
  ground: {
    position: 'absolute',
    top: 20,
    width: '100%',
    height: '100%',
  },
  mole: {
    position: 'absolute',
    width:'25%',
    top: '50%',
    // alignSelf: 'center',
  },
  holes: {
    position: 'relative',
    width: '25%',
    height: '10%',
    justifyContent: 'center',
    backgroundColor: '#C9BF9C'
  },
  hole: {
    position: 'absolute',
    width: '35%',
    top: '50%',
    // alignSelf: 'center',
  },
  holemask:{
    position: 'absolute',
    width: '34%',
    top: '50%',
    // alignSelf: 'center',
  }
});

export default styles

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 200,
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
    width: '100%',
    height: '100%',
    backgroundColor: '#C9BF9C'
  },
  holes: {
    top: 20,
    left: 20,
    width: 150,
    height: 70,
  }
});

export default styles

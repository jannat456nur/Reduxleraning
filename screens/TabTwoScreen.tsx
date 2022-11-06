import { StyleSheet } from 'react-native';
import { useDispatch,useSelector } from "react-redux";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { selectCount } from '../store/counterSlice';

export default function TabTwoScreen() {
  const count =(useSelector(selectCount))
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

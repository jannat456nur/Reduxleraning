import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useDispatch,useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../store/counterSlice";
import { selectTheme, toggleTheme } from "../store/themeSlice";



export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  const count =(useSelector(selectCount))
  const mode = useSelector(selectTheme)
  const bgColor = mode === 'light'?'white':'black'
  const textColor = mode === 'light'?'black':'white'

  return (
    <View style={[styles.container,{backgroundColor:bgColor}]}>
      <Text style={[styles.title,{color:textColor}]}>{count}</Text>
      <Pressable onPress={() => dispatch(increment())}>
        <Text style={{color:textColor}}>Increment</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(decrement())}>
        <Text style={{color:textColor}}>decrement</Text>
      </Pressable>
{/* 
      <Pressable onPress={() => dispatch(toogleTheme('dark'))}>
        <Text>Make theme dark</Text>
      </Pressable>

      <Pressable onPress={() => dispatch(toogleTheme('light'))}>
        <Text>Make theme light</Text>
      </Pressable> */}
      <Pressable onPress={()=>dispatch(toggleTheme('dark'))}>
        <Text style={{color:textColor}}>
          Dark
        </Text>
      </Pressable>
      <Pressable onPress={()=>dispatch(toggleTheme('light'))}>
        <Text style={{color:textColor}}>
          Light
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

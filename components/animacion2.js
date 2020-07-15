import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';

const Animacion2 = () => {
  /**Begins at 0 because opacity 0 */
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      /**Value to reach */
      toValue: 400,
      /**Time to reach ms */
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <>
      <Animated.View
        style={[
          styles.caja,{
              width:animacion,
              height: animacion
          }
        ]}></Animated.View>
    </>
  );
};
const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animacion2;
